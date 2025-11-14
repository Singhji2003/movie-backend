import express from "express";
import { upload } from "../middleware/upload.js"; // same Cloudinary multer middleware

import {
  addTVSeries,
  getAllTVSeries,
  deleteTVSeries,
} from "../controllers/tvSeriesController.js";

const router = express.Router();

// routes
router.post("/", upload.single("series"), addTVSeries);
router.get("/", getAllTVSeries);
router.delete("/:id", deleteTVSeries);
export default router;
