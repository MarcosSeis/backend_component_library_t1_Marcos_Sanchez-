import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  res.json({ message: "register placeholder" });
};

export const login = (req: Request, res: Response) => {
  res.json({ message: "login placeholder" });
};
