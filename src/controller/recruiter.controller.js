import { RecuriterModel } from "../model/recuriter.model.js";

export class RecruiterController{
    getRegister(req,res){
        res.render('index');
    }
    getLogin(req,res){
        res.render('login');
    }
    postRegister(req,res){
        const {name,email,password}=req.body;
        RecuriterModel.add(name,email,password);
        res.render('login');
    }
}