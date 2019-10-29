var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
/*-----------------SMTP-----------------------------------*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    // need an email account to send emails from
    auth: {
        user: "",
        pass: ""
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
// don't do this, redirects the whole website
/*app.get('/',function(req,res){
    res.sendfile('index.html');
});*/
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : "Reset Password",
        text : "" // need to enter in the web address to
                  // passwordResetLink.html
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

/*--------------------End Routing----------------------------*/

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});
