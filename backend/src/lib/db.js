import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  if (!ENV.MONGO_URI) {
    console.error("❌ MONGO_URI is not defined");
    process.exit(1);
  }
  try {
    await mongoose.connect(ENV.MONGO_URI, { autoIndex: false });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
