import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import Tracking from "../models/Tracking";

const router = express.Router();

router.get("/", authMiddleware, async (_req, res) => {
  try {
    const events = await Tracking.find().lean();

    // Convertir a CSV
    let csv = "component,variant,action,timestamp\n";
    events.forEach((e) => {
      csv += `${e.component || ""},${e.variant || ""},${e.action || ""},${e.createdAt}\n`;
    });

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=tracking.csv");

    return res.send(csv);
  } catch (error) {
    res.status(500).json({ error: "Failed to export CSV" });
  }
});

export default router;
