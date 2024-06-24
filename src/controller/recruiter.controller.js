import { RecuriterModel } from "../model/recuriter.model.js";

export class RecruiterController{
    getRegister(req,res){
        res.render('index');
    }
    getLogin(req,res){
        res.render('login',{errorMessage:null,name:req.session.name});
    }
    postRegister(req,res){
        const {name,email,password}=req.body;
       
        RecuriterModel.add(name,email,password);
        res.render('login',{errorMessage:null});
    }
    postLogin(req,res){
        const {email,password}=req.body;
       
        const recruiter=RecuriterModel.isValidRecruiter(email,password);
       
        if(recruiter)
           { 
            req.session.name=recruiter.name;
            res.render('index',{name:req.session.name});
           }
        else
            res.render('login',{errorMessage:'invalid Credentials',name:req.session.name})
}

logout(req,res){
    req.session.destroy((err)=>{
        if(err){
        console.log(err)
        }
        else{
            res.redirect('/login');
        }
    })
}
}