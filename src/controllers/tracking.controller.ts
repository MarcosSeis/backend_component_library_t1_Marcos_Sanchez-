import { Request, Response } from "express";
import Tracking from "../models/Tracking";

export const trackEvent = async (req: Request, res: Response) => {
  try {
    const { component, variant, action, metadata } = req.body;

    if (!component || !action) {
      return res.status(400).json({
        error: "component and action are required",
      });
    }

    const entry = await Tracking.create({
      component,
      variant,
      action,
      metadata,
    });

    return res.json({
      message: "Event tracked",
      entry,
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

export const getStats = async (_req: Request, res: Response) => {
  try {
    const totalEvents = await Tracking.countDocuments();

    const eventsByComponent = await Tracking.aggregate([
      { $group: { _id: "$component", count: { $sum: 1 } } },
    ]);

    return res.json({
      totalEvents,
      eventsByComponent,
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
