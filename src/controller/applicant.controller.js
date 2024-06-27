import { ApplicantModel } from "../model/applicant.model.js";


export class ApplicantController{
     
    uploadResume(req,res){
        const {name,email,contactNo}=req.body;
        
        let resume='/resume/'+req.file.filename;
        let applicants=ApplicantModel.getResume(name,email,contactNo,resume);
        if(applicants)
        res.render("applicants",{applicants:applicants});
    }
}