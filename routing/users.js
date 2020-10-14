const mongoose = require('mongoose');
const router = express.Router();
const express = require("express");

const UserSchema = require('../schemas/UserSchema');
const KeySchema = require('../schemas/KeySchema');
//read
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const UserModel = mongoose.model("UserModel", UserSchema);
const KeyModel = mongoose.model("KeyModel", KeySchema);


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'tutorfinder@gmail.com',
      pass: 'mxzmxz123'
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (validator.validate(email)) {
      UserModel.find({ "userInfo.employeeEmail": email }).then(async checkEmail => {
          if (checkEmail.length > 0) {
              const isMatch = await bcrypt.compare(password, checkEmail[0].userInfo.password)
              if (isMatch) {
                  if (checkEmail[0].active == true) {
                      const token = await jwt.sign({
                          name: checkEmail[0].userInfo.firstName,
                          username: checkEmail[0].userInfo.email,
                          role: checkEmail[0].userInfo.role,
                      },
                          secret
                      );
                     
                      res.cookie("loginToken", token, {
                          maxAge: 172800000,
                      });
                      res.send({ success: true, error: null, info: { role: checkEmail[0].userInfo.employeeRole, id: checkEmail[0]._id } })
                      res.end();

                  } else {
                      return (res.send({ success: false, error: "המשתמש נועל.", info: null }))
                  }
              } else {
                  return (res.send({ success: false, error: "הסיסמה לא נכונה.", info: null }))
              }
          } else {
              res.send({ success: false, error: "לא נמצא דואר אלקטרוני כזה במערכת.", info: null })
          }

      })
  } else {
      res.send({ success: false, error: "דואר אלקטרוני שגוי", info: null })
  }
})






router.post('/createUser', [auth, admin, audit], (req, res) => {

  const { firstName,lastName,city,education,phoneNumber,personalPhoto, email, role, password } = req.body;
  let regex = /[^A-Za-z0-9]/;
  let containSepcChars = regex.test(password);

  let table = [];
  if (!containSepcChars) {
  if (validator.validate(email)) {
      UserModel.find({ "userInfo.email": email }).then(async (checkEmail) => {
          if (checkEmail.length > 0) {
              return (res.send({ success: false, error: "Email is already in use", info: null }))
          }

          else {
              const salt = await bcrypt.genSalt(saltRounds)
              const hashpassword = await bcrypt.hash(password, salt)
              await UserModel.insertMany({ userInfo: { employeeName: name, employeeEmail: email, employeeRole: role, password: hashpassword }, active: true })

              await UserModel.find({ active: true }).then(async users => {
                  if (users.length > 0) {

                      for (let index = 0; index < users.length; index++) {
                          table.push({ email: users[index].userInfo.employeeEmail, name: users[index].userInfo.employeeName, role: users[index].userInfo.employeeRole, id: users[index]._id, active: users[index].active })
                      }

                      // var mailOptions = {
                      //     from: 'tutorfinder@gmail.com',
                      //     to: email,
                      //     subject: 'תודה שנרשמת!',
                      //     text: `שלום ${name.charAt(0).toUpperCase() + name.slice(1)},Welcome to your new Jiraph Account. 

                      //     Sign in to your Jiraph Account to access Jira tasks and Analysis. 
                          
                      //    שם המשתמש שלך: ${email}
                          
                      //     The Jiraph Team`
                      // };

                      transporter.sendMail(mailOptions, function (err, info) {
                          if (err) {
                              return (res.send({ success: false, error: err, info: null }))
                          } else {
                              console.log('Email sent: ' + info.response);
                          }
                      });
                      res.send({ success: true, error: null, info: { table } })
                  }
              })
          }

      })
  } else {
      res.send({ success: false, error: "Email not valid", info: null })
  }
} else {
  res.send({ success: false, error: "No Special Characters or White Space allowed in User Password!", info: null })
}
})












module.exports = router;