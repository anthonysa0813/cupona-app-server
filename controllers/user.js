import { request, response } from "express";
import User from "../models/User.js";

export const getUser = async (req = request, res = response) => {
  res.json({
    message: "User already",
  });
};

export const createUser = async (req = request, res = response) => {
  try {
    const { body } = req;
    const user = new User(body);
    await user.save();
    return res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Hubo un error",
    });
  }
};
