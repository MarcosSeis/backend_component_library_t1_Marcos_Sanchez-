import mongoose, { Schema, Document } from "mongoose";

export interface ITracking extends Document {
  component: string;
  action: string;
  variant?: string;
  timestamp: number;
}

const TrackingSchema = new Schema<ITracking>(
  {
    component: { type: String, required: true },
    action: { type: String, required: true },
    variant: { type: String },
    timestamp: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<ITracking>("Tracking", TrackingSchema);
