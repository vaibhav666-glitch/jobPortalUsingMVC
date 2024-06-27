export class ProductModel{
    constructor(id,
        jobCategory,
        jobDesignation,
        location,
        companyName,
        salary,
        position,
        skills,
        applyBy
       ){
    this.id=id
   this.jobCategory=jobCategory
   this.jobDesignation=jobDesignation,
   this.location=location
   this.companyName=companyName
   this.salary=salary
   this.position=position
   this.skills=skills
   this.applyBy=applyBy
   
    }

    static getAll(){
       // console.log(arr);
        return jobs;
    }
    static add(jobObj){
       let newJob=new ProductModel(jobs.length+1,jobObj.jobCategory,
        jobObj.jobDesignation,
        jobObj.location,
        jobObj.companyName,
        jobObj.salary,
        jobObj.position,
        jobObj.skills,
        jobObj.applyBy);

        jobs.push(newJob);
    }
    static delete(id){
        let index = jobs.findIndex(job => job.id == id);
        console.log("i am index"+" "+index);
        jobs.splice(index,1); 
    }
    static getId(id)
    {
        let index = jobs.findIndex(job => job.id == id);
        return jobs[index];
        
    }
    static postUpdate(jobObj)
    {
        jobObj.id=Number(jobObj.id);
        let index = jobs.findIndex(job => job.id == jobObj.id);
        jobs[index]=jobObj;
        console.log(jobs);
    }

}
let jobs=[{
    id:1,
    jobCategory:"Tech",
    jobDesignation:"Software Engineer",
    location:"Delhi",
    companyName:"CodingNinja",
    salary:"10LPA",
    position:"10",
    skills:["Python","Java"],
    applyBy:"2020-12-31",
   
},
    {
        id:2,
        jobCategory:"Tech",
        jobDesignation:"MERN",
        location:"Gurgaon",
        companyName:"Google",
        salary:"20LPA",
        position:"10",
        skills:["Python","Java","JavaScript"],
        applyBy:"2020-12-31",
    },
    {
        id:3,
        jobCategory:"Non-Tech",
        jobDesignation:"HR",
        location:"Noida",
        companyName:"Amazon",
        salary:"10LPA",
        position:"8",
        skills:["softSkills"],
        applyBy:"2020-12-31",
    }
]
