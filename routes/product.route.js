import express from "express";
import { addProduct, getAllProducts, getProductById, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/', addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
