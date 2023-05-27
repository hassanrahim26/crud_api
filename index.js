import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import connectDB from './config/dbConn.js';
import productRoutes from './routes/product.route.js'
const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json())

app.get('/', (req, res) => res.send("Hello from Home Page"));

app.use('/product', productRoutes)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})