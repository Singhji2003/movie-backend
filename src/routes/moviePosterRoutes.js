import express from "express";
import upload from "../middleware/upload.js";
import {
  createMoviePoster,
  getAllPosters,
} from "../controllers/moviePosterController.js";

const router = express.Router();

router.post("/", upload.single("image"), createMoviePoster);
router.get("/", getAllPosters);

export default router;
