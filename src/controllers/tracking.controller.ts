import { Request, Response } from "express";

export const trackEvent = (req: Request, res: Response) => {
  res.json({ message: "track placeholder" });
};

export const getStats = (req: Request, res: Response) => {
  res.json({ message: "stats placeholder" });
};
