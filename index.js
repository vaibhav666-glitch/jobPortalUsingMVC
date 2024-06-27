import express from 'express';
import path from 'path';
import { ProductController } from './src/controller/product.controller.js';
import { RecruiterController } from './src/controller/recruiter.controller.js';
import session from 'express-session';
import { auth } from './src/middleware/auth.middleware.js';
import { ApplicantController } from './src/controller/applicant.controller.js';
import { uploadFile } from './src/middleware/fileUpload.middleware.js';
import { email } from './src/middleware/sendEmail.middleware.js';

const app=express();

//parse form data
app.use(express.urlencoded({extended:true}));
// setup view engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src','view'));
// create an instance of ProductController
const productController=new ProductController();
const recruiterController=new RecruiterController();
const applicantController=new ApplicantController();


app.use(express.static('src/view'));
app.use(express.static('public'));
app.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false},

})
);



app.get("/index",(req,res)=>{
    res.render("index",{name:req.session.name});
    
});

app.get("/index",recruiterController.getRegister);
app.post("/login",recruiterController.postRegister);
app.get("/login",recruiterController.getLogin)
app.post("/index",recruiterController.postLogin);


app.get("/jobs", productController.getProducts)
app.get("/updateJob:id",auth,productController.getUpdateJob);
app.get("/add-job",auth,productController.getAddJob)
app.post("/add-jobs",auth, productController.postAddJob)
app.post("/update-job",auth, productController.postUpdateJob);
app.get("/delete-job:id",auth,productController.deleteJob);
app.get("/jobDetails:id",productController.getDetails);

app.post("/upload-resume",uploadFile.single("resume"),email, applicantController.uploadResume);
app.get("/logout",recruiterController.logout);


app.listen(3200,()=>{
    console.log('Server is running on port 3200');
});