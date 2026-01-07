import HTTP_STATUS from "../utils/httpStatusCodes.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    let { fullName, email, password } = req.body;
    email = email?.toLowerCase();
    if (!fullName || !email || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Password must be at least 6 characters" });
    }
    // check if email is valid: regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(HTTP_STATUS.CONFLICT)
        .json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      await newUser.save();
      generateToken(newUser._id, res);

      return res.status(HTTP_STATUS.CREATED).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup", error);
    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};
