import express from "express";
import { LoginController, RegisterController } from "../controllers/authController.js";
import { getLoginTexts } from "../controllers/i18nController.js";

const router = express.Router();


router.post("/login", LoginController);
router.post("/register", RegisterController);
router.get('/loginTexts', getLoginTexts)


export default router