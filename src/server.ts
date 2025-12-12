import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import trackingRoutes from "./routes/tracking.routes";
import exportRoutes from "./routes/export.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});


app.use("/api/auth", authRoutes);
app.use("/api/components", trackingRoutes);
app.use("/api/components/export", exportRoutes);