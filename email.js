
const mailer = require('nodemailer');

let transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'engineercore27@gmail.com',
    pass: 'l|ngl|ngl|ng'
  }})

let mailOptions = {
  from: 'engineercore27@gmail.com',
  to: regis.email,
  subject: 'Email Confirmation',
  text: 'it worka!'
};





transporter.sendMail(mailOptions, function(err, data){
  if(err){
    console.log('Error occured');
    console.log(regis.email);
  }else{
    console.log('sent!');
  }
})
