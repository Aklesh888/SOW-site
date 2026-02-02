import express from "express";
import { LoginController, RegisterController } from "../controllers/authController.js";
import { getLoginTexts } from "../controllers/i18nController.js";
import { getProductsController } from "../controllers/getProductsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addProductController } from "../controllers/addProductController.js";
import {  updateProductController } from "../controllers/updateProductController.js";

const router = express.Router();


router.post("/login", LoginController);
router.post("/register", RegisterController);
router.get('/loginTexts', getLoginTexts)

router.get('/products', authMiddleware, getProductsController)
router.post('/product', authMiddleware, addProductController)
router.put('/product/:id', authMiddleware, updateProductController)


export default router