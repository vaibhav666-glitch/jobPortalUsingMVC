
import { ProductModel } from '../model/product.model.js';
export class ProductController{
    getProducts(req, res){
      let jobs=ProductModel.getAll();
      //console.log(jobs);
       res.render("jobs",{jobs:jobs,name:req.session.name});

    }
    getAddJob(req,res){
       res.render("addJob")

    }
    postAddJob(req,res)
    {
      console.log(req.body);
      ProductModel.add(req.body);
      let jobs =  ProductModel.getAll();
      res.render("jobs",{jobs:jobs,name:req.session.name});
    } 
    deleteJob(req,res)
    {
      ProductModel.delete(req.params.id);
        let jobs=ProductModel.getAll();
        console.log(jobs)
        res.render("index",{name:req.session.name});
    }
}