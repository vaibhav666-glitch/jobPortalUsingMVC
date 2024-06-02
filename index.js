import express from 'express';
import path from 'path'
import { ProductController } from './src/controller/product.controller.js';
const app=express();

const productController=new ProductController();
app.get("/",productController.getProducts)
app.use(express.static('src/view'));

app.listen(3200,()=>{
    console.log('Server is running on port 3200');
});