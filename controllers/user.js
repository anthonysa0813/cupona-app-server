import { request, response } from "express";
import User from "../models/User.js";
import Coupon from "../models/Cuopon.js";
import { sendEmailToUser } from "../utils/sendEmailUser.js";
import { sendEmailToStore } from "../utils/sendEmailStore.js";

export const getUser = async (req = request, res = response) => {
  res.json({
    message: "User already",
  });
};

export const createUser = async (req = request, res = response) => {
  try {
    const { body } = req;
    const couponNumber = body.cuopon.trim();
    // vamos validad que el cupon exista en nuestra base de datos
    const cuopons = await Coupon.find().where({ code: couponNumber });
    const dataCoupons = cuopons[0];

    if (cuopons.length === 0) {
      return res.status(400).json({
        message: "No existe el cupón",
      });
    }
    // validamos que el cupon no haya sido usado
    if (!dataCoupons.valid) {
      return res.status(400).json({
        message: "Cupon no valido",
      });
    }

    const user = new User(body);
    await user.save();
    dataCoupons.valid = false;
    dataCoupons.save();
    await sendEmailToUser(body.email, body.name);
    await sendEmailToStore(body);
    return res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Hubo un error",
    });
  }
};
