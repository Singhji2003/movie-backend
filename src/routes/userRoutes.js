// routes/userRoutes.js
import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
} from "../controllers/userController.js";
import { uploadActorFiles } from "../middleware/upload.js";

const router = express.Router();

router.get("/", getUsers);

router.post(
  "/",
  uploadActorFiles.fields([
    { name: "professionalHeadshot", maxCount: 1 },
    { name: "fullBodyShot", maxCount: 1 },
    { name: "actingResume", maxCount: 1 },
  ]),
  createUser
);

router.delete("/:id", deleteUser);

export default router;
