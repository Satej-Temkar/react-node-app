import express from "express";
import { getUserData, postUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/", postUser);
router.get("/", getUserData);

export default router;
