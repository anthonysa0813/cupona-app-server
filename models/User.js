import mongoose, { Schema } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  typeDocument: {
    type: String,
    required: true,
  },
  numberDocument: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  cuopon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coupon",
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
