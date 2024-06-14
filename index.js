import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import { ProductController } from './src/controller/product.controller.js';
import { RecruiterController } from './src/controller/recruiter.controller.js';

const app=express();

//parse form data
app.use(express.urlencoded({extended:true}));
// setup view engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src','view'));
// create an instance of ProductController
const productController=new ProductController();
const recruiterController=new RecruiterController();
app.get("/index",(req,res)=>{
    res.render("index");
    
});
app.get("/login",recruiterController.getLogin)
app.get("/index",recruiterController.getRegister);
app.post("/login",recruiterController.postRegister);

app.get("/add-job",productController.getAddJob)
app.post("/jobs",productController.postAddJob)
app.get("/jobs",productController.getProducts)
app.use(express.static('src/view'));

app.listen(3200,()=>{
    console.log('Server is running on port 3200');
});