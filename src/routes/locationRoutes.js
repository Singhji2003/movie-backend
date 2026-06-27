import express from "express";
import { upload } from "../middleware/upload.js";
import {
  addLocation,
  getAllLocations,
  getLocationById,
  deleteLocation,
} from "../controllers/locationController.js";

const router = express.Router();

// Using upload.array to handle multiple image uploads
router.post("/", upload.array("images", 10), addLocation);
router.get("/", getAllLocations);
router.get("/:id", getLocationById);
router.delete("/:id", deleteLocation);

export default router;
