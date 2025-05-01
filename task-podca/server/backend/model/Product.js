import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
  });

  export default mongoose.models.Product || mongoose.model('Product', productSchema);