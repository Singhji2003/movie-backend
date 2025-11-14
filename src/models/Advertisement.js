import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, min: 0, max: 10, required: true },
    trailerLink: { type: String },
    genre: { type: String, required: true },
    releaseYear: { type: Number },
    description: { type: String },
    posterUrl: { type: String, required: true }, // Cloudinary image
  },
  { timestamps: true }
);

export default mongoose.model("advertisement", advertisementSchema);
