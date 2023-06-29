import { Schema, model } from "mongoose";

const CouponSchema = Schema({
  code: {
    type: String,
    required: false,
  },
  valid: {
    type: Boolean,
    required: false,
    default: true
  }
}, {
  timestamps: true
});


const Coupon = model("Coupon", CouponSchema);

export default Coupon;