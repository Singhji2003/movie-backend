import mongoose from "mongoose";

const advertisementLinkSchema = new mongoose.Schema(
  {
    youtubeLink: { type: String },
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model("advertisementLink", advertisementLinkSchema);
