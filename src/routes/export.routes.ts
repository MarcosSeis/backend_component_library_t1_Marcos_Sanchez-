import { Router } from "express";
import { exportTracking } from "../controllers/export.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, exportTracking);

export default router;
