import productModel from "../model/productModel.js";

const getProduct = async (req,res) => {
    try {
        const products = await productModel.find();
        res.json(products)
    } catch (error) {
        console.log(error);
    }
}

const postProduct = async (req,res) => {
    try {
        const newProduct = new productModel(req.body);
        await newProduct.save();
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req,res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        res.json(product)
    } catch (error) {
        console.log(error);
    }
}

export {getProduct,postProduct,deleteProduct}