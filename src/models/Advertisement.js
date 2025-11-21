import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema(
  {
    name: { type: String },
    rating: { type: Number },
    trailerLink: { type: String },
    genre: { type: String },
    releaseYear: { type: Number },
    description: { type: String },
    posterUrl: { type: String }, // Cloudinary image
  },
  { timestamps: true }
);

export default mongoose.model("advertisement", advertisementSchema);
