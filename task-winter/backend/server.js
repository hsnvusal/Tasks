import express from "express";
import { connectDb } from "./config/config.js";
import dotenv from "dotenv"
import cors from "cors"
import productRouter from "./router/productRouter.js"

const app  = express();

dotenv.config();

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/products",productRouter)

connectDb();

app.listen(5000,()=>{
    console.log('backend running');
})