import mongoose from "mongoose";

const moviePosterSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true }, // Cloudinary image URL
  },
  { timestamps: true }
);

export default mongoose.model("MoviePoster", moviePosterSchema);
