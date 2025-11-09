import mongoose from "mongoose";

const tvSeriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, min: 0, max: 10 },
    trailerLink: { type: String },
    genre: { type: String },
    startYear: { type: Number },
    numberOfSeasons: { type: Number },
    status: { type: String, enum: ["Ongoing", "Completed", "Upcoming"] },
    poster: { type: String }, // path to uploaded file
    description: { type: String },
  },
  { timestamps: true }
);

const TVSeries = mongoose.model("TVSeries", tvSeriesSchema);
export default TVSeries;
