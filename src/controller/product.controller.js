
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
     // console.log(req.body);
      ProductModel.add(req.body);
      let jobs =  ProductModel.getAll();
      res.render("jobs",{jobs:jobs,name:req.session.name});
    } 
    deleteJob(req,res)
    {
      ProductModel.delete(req.params.id);
      console.log(req.params.id);
        let jobs=ProductModel.getAll();
        
        res.render("jobs",{jobs:jobs,name:req.session.name});
    }
    getUpdateJob(req,res)
    {
      //console.log(req.params.id);
      let jobFound=ProductModel.getId(req.params.id);
      //console.log(jobFound);
        res.render("updateJob",{job:jobFound,name:req.session.name});
    }
    postUpdateJob(req,res)
    {
     // console.log(req.params.id);
      ProductModel.postUpdate(req.body);
      let jobs=ProductModel.getAll();
      res.render("jobs",{jobs:jobs,name:req.session.name});
    }
    getDetails(req,res)
    {
      let jobFound=ProductModel.getId(req.params.id);
      console.log(jobFound);
      res.render("jobDetails",{job:jobFound,name:req.session.name,applicant:null});
    }
    
}