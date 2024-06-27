export class ApplicantModel{
    constructor(id,name,email,contactNo,resume){
        this.id=id;
        this.name=name;
        this.email=email;
        this.contactNo=contactNo;
        this.resume=resume;

    }
   static getResume(name,email,contactNo,resume){
    
        let newApplicant=new ApplicantModel(applicants.length+1,name,email,contactNo,resume);
        console.log(newApplicant);
        applicants.push(newApplicant);
        return applicants;
    }
   

}
var applicants=[];