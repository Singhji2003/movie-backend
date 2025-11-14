import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "movie_posters",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

export const upload = multer({ storage });

// Image Upload (Headshot & Full Body)
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "actor_profiles",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

export const uploadImages = multer({ storage: imageStorage });
// PDF Upload (Resume)
const pdfStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "actor_resumes",
    allowed_formats: ["pdf"],
  },
});
export const uploadPDF = multer({ storage: pdfStorage });
