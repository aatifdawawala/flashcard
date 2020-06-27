const express = require('express');
const { Pool, Client } = require('pg')
const connectionString = 'postgresssql://postgres:root@localhost:5432/engineerCoreData'

const client = new Client({
  connectionString:connectionString
})


const app = express();
const path = require('path');

const PORT = 8080;

var site = 'signup.html'


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', site));
});

app.listen(PORT, () => console.log('Server is starting on PORT, ', 8080));

// Data parsing
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
  // TODO:
  // send email here
  console.log('Data: ', req.body)
  const mailer = require('nodemailer');

  let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'engineercore27@gmail.com',
      pass: 'l|ngl|ngl|ng' 
    }})
    var random = Math.floor((Math.random() * 1000000) + 1);
  let mailOptions = {
    from: 'engineercore27@gmail.com',
    to: req.body.email,
    subject: 'Email Confirmation',
    text: 'This is your 6-digit confirmation code: ' + random.toString() 
  };
  


  transporter.sendMail(mailOptions, function(err, data){
    if(err){
      console.log('Error occured');
      console.log(req.body.email);
    }else{
      console.log('Sent!');
      //app.get('/', (req, res) => {
        //res.sendFile(path.join(__dirname, '', 'number.html'));
      //});
      site = 'number.html';
      app.listen(8081, () => console.log('Server is restarting on PORT, ', 8081));
      app.post('/confirm', (reqt, rest) => {
        console.log('Data: ', req.body)
        if(reqt.body.num == random) {
          console.log("Email confirmed")
          client.connect()
          client.query("INSERT INTO users (password, email) VALUES ('" +  req.body.pass1.trim() + "', '" + req.body.email.trim() + "');" ,(err,resp)=>{
            console.log('1')
            console.log(err,resp)
          });
          client.end();
          site = "login.html"
        } else {
          rest.send("Invalid code")
        }
      })
    }
  })
});

