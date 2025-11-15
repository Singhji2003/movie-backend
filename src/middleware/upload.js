// middleware/upload.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

// (Optional) existing storage for movie posters – keep if you use elsewhere
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "movie_posters",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

export const upload = multer({ storage });

// ✅ ONE storage for actor images + resumes
const actorStorage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    // Decide folder & allowed formats based on file type
    if (file.mimetype === "application/pdf") {
      return {
        folder: "actor_resumes",
        allowed_formats: ["pdf"],
      };
    }

    // default: treat as image for actor profile
    return {
      folder: "actor_profiles",
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
    };
  },
});

// ✅ Single multer instance to handle all actor files
export const uploadActorFiles = multer({ storage: actorStorage });
