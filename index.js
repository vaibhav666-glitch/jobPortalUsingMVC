import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import { ProductController } from './src/controller/product.controller.js';
const app=express();

// setup view engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src','view'));
// create an instance of ProductController
const productController=new ProductController();
app.get("/index",(req,res)=>{
    res.render("index");
    
});
app.get("/jobs",productController.getProducts)
app.use(express.static('src/view'));

app.listen(3200,()=>{
    console.log('Server is running on port 3200');
});