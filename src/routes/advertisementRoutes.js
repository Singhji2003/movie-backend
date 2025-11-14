import express from "express";
import { upload } from "../middleware/upload.js"; // same Cloudinary multer middleware
import {
  addAdvertisement,
  getAllAdvertisements,
  deleteAdvertisement,
} from "../controllers/advertisementController.js";

const router = express.Router();

router.post("/", upload.single("poster"), addAdvertisement);
router.get("/", getAllAdvertisements);
router.delete("/:id", deleteAdvertisement);

export default router;
