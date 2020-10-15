const mongoose = require('mongoose');
const router = express.Router();
const express = require("express");
const bcrypt = require('bcrypt');

const UserSchema = require('../schemas/UserSchema');
const KeySchema = require('../schemas/KeySchema');
//read

const jwt = require("jsonwebtoken");
var nodemailer = require('nodemailer')
var validator = require("email-validator");
const UserModel = mongoose.model("UserModel", UserSchema);
const KeyModel = mongoose.model("KeyModel", KeySchema);

var secret = require("../index")
const saltRounds = 10

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lessonsassistanceservice@gmail.com',
        pass: 'Azsx3180'
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (validator.validate(email)) {
        UserModel.find({ "userInfo.email": email }).then(async checkEmail => {
            if (checkEmail.length > 0) {
                const isMatch = await bcrypt.compare(password, checkEmail[0].userInfo.password)
                if (isMatch) {
                    if (checkEmail[0].active == true) {
                        const token = await jwt.sign({
                            name: checkEmail[0].userPersonalInfo.firstName,
                            username: checkEmail[0].userInfo.email,
                            role: checkEmail[0].userInfo.role,
                        },
                            secret
                        );

                        res.cookie("loginToken", token, {
                            maxAge: 172800000,
                        });
                        res.send({ success: true, error: null, info: { role: checkEmail[0].userInfo.role, id: checkEmail[0]._id } })
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

    const { firstName, lastName, location, education, phoneNumber, personalPhoto, email, password } = req.body;
    let regex = /[^A-Za-z0-9]/;
    let containSepcChars = regex.test(password);

    let table = [];
    if (!containSepcChars) {
        if (validator.validate(email)) {
            UserModel.find({ "userInfo.email": email }).then(async (checkEmail) => {
                if (checkEmail.length > 0) {
                    return (res.send({ success: false, error: "הכתובת כבר נמצאת במאגר הלקוחות שלנו אנא נסה כתובת דואר אחרת.", info: null }))
                }

                else {
                    const salt = await bcrypt.genSalt(saltRounds)
                    const hashpassword = await bcrypt.hash(password, salt)
                    await UserModel.insertMany(
                        {
                            userInfo: {
                                email: email,
                                role: "student",
                                password: hashpassword
                            },
                            
                            userPersonalInfo: {
                                firstName: firstName,
                                lastName: lastName,
                                location: location,
                                education: education,
                                phoneNumber: phoneNumber,
                                personalPhoto: personalPhoto,
                            },
                            userLifeActivity: {
                                biography: null,
                                experiences: null,
                                awardsPhotos: null,
                            },
                            teaching: {
                                subSubjects: null,
                                teachingPlace: null,
                            },
                            ratings: {
                                overallRate: 0,
                                peopleRating: null,
                            },
                            userActivity: {
                                active: true,
                                accountCreation: new Date(),
                                lasLogIn: new Date()
                            }
                        })

                    await UserModel.find({ active: true }).then(async users => {
                        if (users.length > 0) {

                            for (let index = 0; index < users.length; index++) {
                                table.push({ email: users[index].userInfo.employeeEmail, name: users[index].userInfo.employeeName, role: users[index].userInfo.employeeRole, id: users[index]._id, active: users[index].active })
                            }

                            var mailOptions = {
                                from: 'lessonsassistanceservice@gmail.com',
                                to: email,
                                subject: 'תודה שנרשמת לאתר שיעורי עזר!',
                                text: `תודה על הרשמתך לאתר שיעורי עזר, 

                          מהיום תוכל לרכוש שיעורי עזר במחירים ומורים הטובים ביותר. 
                          ניתן להיכנס לחשבונך בכל עת:
                          שם המשתמש שלך הוא:${email} 
                          
                          
                          
                          בהצלחה 
                          צוות שיעורי עזר. `
                            };

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
            res.send({ success: false, error: "הדואר האלקטרוני אינו תקף", info: null })
        }
    } else {
        res.send({ success: false, error: "אסור להשתמש בתווים מיוחדים או רווחים בסיסמת המשתמש!", info: null })
    }
})




router.post('/forgotPassword', (req, res) => {
    const { email } = req.body;
    if (validator.validate(email)) {
        UserModel.find({ "userInfo.employeeEmail": email, active: true }).then(checkEmail => {
            if (checkEmail.length > 0) {
                const key = makeid(10)

                var mailOptions = {
                    from: 'servicetest468@gmail.com',
                    to: email,
                    subject: 'Reset Password',
                    text: `You requested to reset your password. 
Please copy the code below to continue the password reset process:  
                    
${key}`
                };

                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        return (res.send({ success: false, error: err, info: null }))
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                KeyModel.insertMany(
                    {
                        employeeEmail: email,
                        keyTime: Date.now(),
                        key: key
                    }
                )
                res.send({ success: true, error: null, info: { key: key } })

            } else {
                res.send({ success: false, error: "Email not found", info: null })
            }
        })
    } else {
        res.send({ success: false, error: "Email not valid", info: null })
    }
})








module.exports = router;