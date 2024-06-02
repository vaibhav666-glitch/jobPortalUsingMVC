import path from 'path'
export class ProductController{
    getProducts(req, res){
      return res.sendFile(path.join(path.resolve(),'src','view','index.html'));

    }
    addProducts(req,res){

    }
}