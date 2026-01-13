import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoute.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// Start server AFTER DB connection
const startServer = async () => {
  await connectDB();

  const PORT = ENV.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
