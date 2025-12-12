import { Request, Response } from "express";
import Tracking from "../models/Tracking";

export const trackEvent = async (req: Request, res: Response) => {
  try {
    const event = new Tracking(req.body);
    await event.save();

    res.json({ message: "Event tracked", event });
  } catch (err) {
    res.status(500).json({ error: "Failed to track event" });
  }
};

export const getStats = async (_req: Request, res: Response) => {
  try {
    
    const events = await Tracking.find().sort({ timestamp: 1 });

    const eventsByComponent = await Tracking.aggregate([
      { $group: { _id: "$component", count: { $sum: 1 } } }
    ]);

    res.json({
      totalEvents: events.length,
      eventsByComponent,
      events, 
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load stats" });
  }
};
