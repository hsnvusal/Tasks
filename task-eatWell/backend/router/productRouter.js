import express from "express";
import { getProduct,postProduct,deleteProduct } from "../controllers/productController.js";

const router = express();

router.get("/",getProduct).post("/",postProduct).delete("/:id",deleteProduct)

export default router