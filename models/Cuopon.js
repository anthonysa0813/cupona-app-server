import { Schema, model } from "mongoose";

const CouponSchema = Schema(
  {
    code: {
      type: String,
      required: false,
    },
    valid: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

CouponSchema.methods.toJSON = function () {
  const { _id: id, code, valid, ...rest } = this.toObject();
  return {
    id,
    code,
    valid,
  };
};
const Coupon = model("Coupon", CouponSchema);

export default Coupon;
