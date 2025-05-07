import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    image:String,
    price:String,
    title:String,
    description:String,
});

export default mongoose.model('Product',productSchema) ;