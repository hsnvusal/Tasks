import { connectDb } from "./config/config.js";
import express from "express";
import cors from "cors";
import ProductRouter from "./router/productRouter.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors("*"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/products",ProductRouter)

connectDb();

app.listen(5000,()=>{
    console.log('Backend running');
})