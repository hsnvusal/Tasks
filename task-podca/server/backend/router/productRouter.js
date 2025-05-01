import express from "express";
import { deleteProducts, editProducts, getProducts,postProduct,getProductById } from "../controllers/productController.js";

const router = express.Router();

router.get("/",getProducts)
.get("/:id", getProductById)
.post("/",postProduct)
.put('/:id',editProducts)
.delete("/:id",deleteProducts)

export default router