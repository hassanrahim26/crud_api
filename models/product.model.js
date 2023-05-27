import mongoose from "mongoose";

const ProductDetailsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

export default new mongoose.model('Product', ProductDetailsSchema);
