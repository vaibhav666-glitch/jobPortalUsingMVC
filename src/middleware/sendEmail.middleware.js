import nodemailer from 'nodemailer'
// Create a transporter object using SMTP


export const email=(req,res,next)=>{
const transporter = nodemailer.createTransport({
service: 'Gmail',
auth: {
user: 'vaibhavning@gmail.com',
pass: 'ykkb izaa tepv kmna',
},
});
// Define the email configuration
const mailOptions = {
from: 'vaibhavning@gmail.com',
to: req.body.email,
subject: 'Hello'+ req.body.name,
text: 'Thank you for applying the job we will call you shortly',
};
// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
        } else {
        console.log('Email sent:', info.response);
        }
        });


        next();
}    