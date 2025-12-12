import { Router } from "express";
import { validate } from "../middleware/validate";
import { trackingSchema } from "../validators/tracking.validators";
import { trackEvent, getStats } from "../controllers/tracking.controller";

const router = Router();

router.post("/track", validate(trackingSchema), trackEvent);
router.get("/stats", getStats);

export default router;
