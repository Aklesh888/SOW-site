import express from "express";
import { LoginController, RegisterController } from "../controllers/authController.js";
import { getLoginTexts } from "../controllers/i18nController.js";
import { getProductsController } from "../controllers/getProductsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addProductController } from "../controllers/addProductController.js";

const router = express.Router();


router.post("/login", LoginController);
router.post("/register", RegisterController);

router.post('/product', authMiddleware, addProductController)
router.get('/products', authMiddleware, getProductsController)
router.get('/loginTexts', getLoginTexts)


export default router