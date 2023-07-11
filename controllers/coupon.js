import { request, response } from "express";
import { v4 as uuidv4 } from "uuid";
import { mesesArr } from "../helpers/meses.js";
import Coupon from "../models/Cuopon.js";

export const getCoupons = async (req, res) => {
  try {
    const cupons = await Coupon.find();
    return res.json({
      message: "all coupons",
      cupons,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error " + error.message,
    });
  }
};

export const createCoupons = async (req = request, res = response) => {
  try {
    const { number } = req.query;
    const mesNumber = new Date().getMonth();

    for (let i = 0; i <= Number(number); i++) {
      const coupon = new Coupon({
        code: `${uuidv4().substring(0, 6).toUpperCase()}`,
      });
      coupon.save();
    }

    return res.json({
      message: "the coupon was created successfully",
    });
  } catch (error) {}
};
