export class ProductModel{
    constructor(id,role,name,location,salary,skills,details){
        this.id=id;
        this.name=name;
        this.role=role;
        this.location=location;
        this.salary=salary;
        this.skills=skills;
        this.details=details;
    }

    static getAll(){
       // console.log(arr);
        return jobs;
    }
    static add(jobObj){
       let newJob=new ProductModel(jobs.length+1,jobObj.company,jobObj.job_designation,jobObj.location,jobObj.salary,jobObj.skills_required,jobObj.apply_by);
       
        jobs.push(newJob);
    }

}
let jobs=[{
    id:1,
    name:"CodingNinja",
    role:"Software Developer",
    location:"Delhi",
    salary:"10LPA",
    skills:["Python","Java"],
    details:"Good in coding"
},
    {
        id:2,
        name:"CodingWarrior",
        role:"Data Scientist",
        location:"Banglore",
        salary:"15LPA",
        skills:["Python","R"],
        details:"Good in Data Analysis"
    },
    {
        id:3,
        name:"Google",
        role:"Software Developer",
        location:"Hyderabad",
        salary:"20LPA",
        skills:["Python","Java"],
        details:"Good in coding"
        
    }
]
