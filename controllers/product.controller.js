import Product from '../models/product.model.js';

export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({
            status: "success",
            message: "Product added successfully",
            result: product
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(404).json({message: `Cannot find any product with ID ${id}`});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json({
            status: "success",
            message: `Product with Id ${id} updated successfully`,
            result: updatedProduct
        });
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: `Cannot find any product with ID ${id}`});
        }

        res.status(200).json({
            status: "success",
            message: `Product with Id ${id} deleted Successfully`,
            result: product,
        });
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}