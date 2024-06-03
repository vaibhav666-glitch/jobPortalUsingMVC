import path from 'path'
import { ProductModel } from '../model/product.model.js';
export class ProductController{
    getProducts(req, res){
      let jobs=ProductModel.getAll();
      console.log(jobs);
       res.render("jobs",{jobs:jobs});

    }
    addProducts(req,res){

    }
}