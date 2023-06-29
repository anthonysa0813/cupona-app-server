import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_CNN);
    console.log(`the database connection is established`);
  } catch (error) {
    console.log(error);
  }
};
