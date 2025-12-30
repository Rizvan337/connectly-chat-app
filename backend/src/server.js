import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import { connectDB } from "./lib/db.js";
dotenv.config();
const app = express();

app.use("/api/auth", authRoutes);

connectDB();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
