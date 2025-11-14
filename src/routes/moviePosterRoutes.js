import express from "express";
import upload from "../middleware/upload.js";
import {
  createMoviePoster,
  getAllPosters,
  deleteMoviePoster,
} from "../controllers/moviePosterController.js";

const router = express.Router();

router.post("/", upload.single("image"), createMoviePoster);
router.get("/", getAllPosters);
router.delete("/:id", deleteMoviePoster);
export default router;
