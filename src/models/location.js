import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    city: { type: String },
    state: { type: String },
    usedas: { type: String },
    images: [{ type: String }],
  },
  { timestamps: true },
);

export default mongoose.model("location", locationSchema);
