import mongoose from "mongoose";

const trackingSchema = new mongoose.Schema(
  {
    component: { type: String, required: true },
    variant: { type: String, required: false },
    action: { type: String, required: true },
    metadata: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.model("Tracking", trackingSchema);
