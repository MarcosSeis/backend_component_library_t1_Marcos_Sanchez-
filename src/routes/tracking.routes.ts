import express from "express";
import { trackEvent, getStats } from "../controllers/tracking.controller";

const router = express.Router();

router.post("/track", trackEvent);
router.get("/stats", getStats);

export default router;
