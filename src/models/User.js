import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: Number },
    dob: { type: Date },
    gender: { type: String },
    address: { type: String },
    height: { type: Number },
    weight: { type: Number },
    eyeColor: { type: String },
    hairColor: { type: String },
    experience: { type: String },
    prevWork: { type: String },
    skills: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
