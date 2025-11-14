import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    dob: { type: Date },
    gender: { type: String },

    fullAddress: { type: String },

    weight: { type: Number },
    height: { type: Number },

    eyeColor: { type: String },
    hairColor: { type: String },

    actingExperienceLevel: { type: String }, // Beginner / Intermediate / Advanced
    previousWorks: { type: String },
    specialSkills: { type: String },

    willingToPerform: { type: String }, // Example: Stunts, Action, Romantic etc.

    professionalHeadshot: { type: String }, // image URL
    fullBodyShot: { type: String }, // image URL
    actingResume: { type: String }, // pdf URL

    demoReelLinks: { type: String }, // array of links
    socialMediaHandles: { type: String }, // example { instagram: "", youtube: "" }

    currentAvailability: { type: String },
    preferredRoleTypes: { type: String },

    whyShouldWeCastYou: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
