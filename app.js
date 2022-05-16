const nodemailer = require('nodemailer')

c
var transporter = nodemailer.createTransport({
  service: '',  //email services like outlook ,gmail etc 
  auth: {
    user: '',  //senders id
    pass: ''  //senders password
  }
});


const mailComponents = {
    from : '',   //senders email
    to: '', //receivers email
    subject :'', //email subject
    text :'' //email body
    
}

//send email
transporter.sendMail(mailComponents, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ');
    }
  });