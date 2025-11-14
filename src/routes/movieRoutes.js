import express from "express";
import upload from "../middleware/upload.js"; // same Cloudinary multer middleware
import {
  addMovie,
  getAllMovies,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/", upload.single("poster"), addMovie);
router.get("/", getAllMovies);
router.delete("/:id", deleteMovie);

export default router;
