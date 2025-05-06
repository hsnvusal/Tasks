import { connectDb } from "./config/config.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRouter from "./router/productRouter.js"


dotenv.config();
const app = express();

app.use(cors("*"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/products",productRouter)
connectDb();


app.listen(5000,()=>{
    console.log('Backend Running');
})