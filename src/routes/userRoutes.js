import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
} from "../controllers/userController.js";
import { uploadImages, uploadPDF } from "../middleware/upload.js";

const router = express.Router();

router.get("/", getUsers);
router.post(
  "/",
  uploadImages.fields([
    { name: "professionalHeadshot", maxCount: 1 },
    { name: "fullBodyShot", maxCount: 1 },
  ]),
  uploadPDF.single("actingResume"),
  createUser
);
router.delete("/:id", deleteUser);
export default router;
