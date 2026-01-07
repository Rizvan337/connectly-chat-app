import HTTP_STATUS from "../utils/httpStatusCodes.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import validator from "validator";

export const signup = async (req, res) => {
  try {
    let { fullName, email, password } = req.body;

    email = validator.normalizeEmail(email?.trim());
    fullName = fullName?.trim();
    password = password?.trim();

    if (!fullName || !email || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "All fields are required" });
    }
    // Full name validation
    if (fullName.length < 3 || fullName.length > 50) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Full name must be between 3 and 50 characters" });
    }
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(fullName)) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Full name can only contain letters and spaces" });
    }
    // Email validation
    if (!validator.isEmail(email)) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Invalid email format" });
    }

    // Password validation (strong)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message:
          "Password must be 8+ chars, include uppercase, lowercase, number & special char",
      });
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
