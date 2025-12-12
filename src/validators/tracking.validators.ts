import { z } from "zod";

export const trackingSchema = z.object({
  component: z.string().min(1),
  action: z.string().min(1),
  variant: z.string().optional(),
  timestamp: z.number().int().positive(),
});
