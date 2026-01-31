import express from "express";
import { LoginController } from "../controllers/authController.js";

const router = express.Router();


router.get("/login", LoginController);

export default router