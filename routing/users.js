const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
var secret = require("../server")
const jwt = require("jsonwebtoken");
var nodemailer = require('nodemailer')
var validator = require("email-validator");


const UserSchema = require('../schemas/UserSchema');
const KeySchema = require('../schemas/KeySchema');
const { getMaxListeners } = require('../schemas/UserSchema');
const UserModel = mongoose.model("UserModel", UserSchema);
const KeyModel = mongoose.model("KeyModel", KeySchema);


const saltRounds = 10

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lessonsassistanceservice@gmail.com',
        pass: 'Azsx31800'
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (validator.validate(email)) {
        UserModel.find({ "userInfo.email": email }).then(async checkEmail => {
            if (checkEmail.length > 0) {
                const isMatch = await bcrypt.compare(password, checkEmail[0].userInfo.password)
                if (isMatch) {
                    if (checkEmail[0].userActivity.active == true) {
                        const token = await jwt.sign({
                            name: checkEmail[0].userPersonalInfo.firstName + " " + checkEmail[0].userPersonalInfo.lastName,
                            username: checkEmail[0].userInfo.email,
                            role: checkEmail[0].userInfo.role,
                        },
                            secret
                        );

                        res.cookie("loginToken", token, {
                            maxAge: 1800000
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






router.post('/createUser', (req, res) => {
    const { serverSignUp } = req.body;
    const { firstName, lastName, email, password, role, subject } = serverSignUp;
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
                                role: role,
                                password: hashpassword
                            },

                            userPersonalInfo: {
                                firstName: firstName,
                                lastName: lastName,
                                location: null,
                                education: null,
                                phoneNumber: null,
                                personalPhoto: "https://s1.gifyu.com/images/default-large-203eb4e0d39209a7d102039e731eab6110a14e666350bf5c94be31aee9001d1a.png",
                            },
                            userActivity: {
                                active: true,
                                accountCreation: new Date(),
                                lasLogIn: new Date()
                            },
                            teaching: {
                                subSubjects: [subject],
                                teachingPlaces: ["באינטרנט", "בית המורה"]
                            },
                        })

                    await UserModel.find({ 'userInfo.email': email }).then(async users => {
                        if (users.length > 0) {

                            for (let index = 0; index < users.length; index++) {
                                table.push({
                                    email: users[index].userInfo.email,
                                    name: users[index].userPersonalInfo.firstName,
                                    role: users[index].userInfo.role,
                                    active: users[index].userActivity.active
                                })
                            }

                            var mailOptions = {
                                from: 'lessonsassistanceservice@gmail.com',
                                to: email,
                                subject: 'תודה שנרשמת לאתר שיעורי עזר!',
                                html: `<p dir="rtl">תודה ${firstName}  על הרשמתך לאתר שיעורי עזר,</p>
                                <p dir="rtl"> מהיום תוכל לרכוש שיעורי עזר במחירים הטובים ביותר.</p>
                                <p dir="rtl"> ניתן להיכנס לחשבונך בכל עת</p>
                                <p dir="rtl">  שם המשתמש שלך הוא :  ${email} .</p>
    
    
                                <p dir="rtl"> בהצלחה,</p>
                                <p dir="rtl">צוות שיעורי עזר.</p>`


                            };

                            transporter.sendMail(mailOptions, function (err, info) {
                                if (err) {
                                    console.log("there was an error sending email", err)
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


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

router.post('/forgotPassword', (req, res) => {
    const { email } = req.body;
    if (validator.validate(email)) {
        UserModel.find({ "userInfo.email": email }).then(checkEmail => {
            if (checkEmail.length > 0) {
                const key = makeid(10)

                var mailOptions = {
                    from: 'lessonsassistanceservice@gmail.com',
                    to: email,
                    subject: 'שחזור סיסמה',
                    html: `<p dir="rtl">שלום,</p>
                                <p dir="rtl"> הקוד הזמני שלך הוא : ${key}</p>
                                <p dir="rtl"> אין להשיב להודעה זו.</p>
                                <p dir="rtl">בברכה,</p>
                                <p dir="rtl">צוות שיעורי עזר.</p>`
                };

                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        console.log("there was an error sending the email : ", err)
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                KeyModel.insertMany(
                    {
                        userEmail: email,
                        keyTime: Date.now(),
                        key: key
                    }
                )
                res.send({ success: true, error: null, info: { key: key } })

            } else {
                res.send({ success: false, error: "לא נמצא דואר אלקטרוני כזה במערכת.", info: null })
            }
        })
    } else {
        res.send({ success: false, error: "הדואר האלקטרוני אינו תקף", info: null })
    }
})


router.post('/checkValidKey', (req, res) => {
    const { email, key } = req.body;
    KeyModel.find({ "userEmail": email, "key": key }).then(docs => {
        if (docs.length > 0) {
            docs.map((item, index) => {
                if ((Date.now() - item.keyTime) <= 1800000) {
                    return (res.send({ success: true, error: null, info: null }))
                } else {
                    res.send({ success: false, error: 'הקוד שהוזן אינו תקף.', info: null })
                }
            })
        }
        else {
            res.send({ success: false, error: 'הקוד לא נכון', info: null })
        }
    })
})

router.put('/updatePassword', (req, res) => {
    const { email, password } = req.body;
    let regex = /[^A-Za-z0-9]/;
    let containSepcChars = regex.test(password);
    if (!containSepcChars) {
        UserModel.findOne({ "userInfo.email": email }).then(async docs => {
            if (docs) {
                const salt = await bcrypt.genSalt(saltRounds)
                const hashpassword = await bcrypt.hash(password, salt)
                docs.userInfo.password = hashpassword
                docs.save();
                res.send({ success: true, error: null, info: null })

            } else {
                res.send({ success: false, error: "הדואר האלקטרוני אינו תקף", info: null })
            }
        })
    }
    else {
        res.send({ success: false, error: "אסור להשתמש בתווים מיוחדים או רווחים בסיסמת המשתמש!", info: null })
    }

})



router.post('/updateProfileInfo', (req, res) => {
    const { serverProfileUpdate } = req.body;

    UserModel.findOne({ "userInfo.email": serverProfileUpdate.userEmail }).then(async docs => {
        if (docs) {
            if (serverProfileUpdate.bio != null) {
                docs.userPersonalInfo.firstName = serverProfileUpdate.firstName;
                docs.userPersonalInfo.lastName = serverProfileUpdate.lastName;
                docs.userLifeActivity.biography = serverProfileUpdate.bio;
                docs.save();
                const token = await jwt.sign({
                    name: docs.userPersonalInfo.firstName + " " + docs.userPersonalInfo.lastName,
                    username: docs.userInfo.email,
                    role: docs.userInfo.role,
                },
                    secret
                );

                res.cookie("loginToken", token, {
                    maxAge: 1800000
                })
                res.send({ success: true, error: null, info: null })
            }
            else {
                docs.userPersonalInfo.firstName = serverProfileUpdate.firstName;
                docs.userPersonalInfo.lastName = serverProfileUpdate.lastName;
                docs.save();
                const token = await jwt.sign({
                    name: docs.userPersonalInfo.firstName + " " + docs.userPersonalInfo.lastName,
                    username: docs.userInfo.email,
                    role: docs.userInfo.role,
                },
                    secret
                );

                res.cookie("loginToken", token, {
                    maxAge: 1800000
                })
                res.send({ success: true, error: null, info: null })
            }
            const token = await jwt.sign({
                name: docs.userPersonalInfo.firstName + " " + docs.userPersonalInfo.lastName,
                username: docs.userInfo.email,
                role: docs.userInfo.role,
            },
                secret
            );

            res.cookie("loginToken", token, {
                maxAge: 1800000
            })
            res.send({ success: true, error: null, info: null })

        } else {
            res.send({ success: false, error: "דואר אלקטרוני שגוי", info: null })
        }
    })
})

router.post('/getCurrentUserDetails', (req, res) => {
    const { userEmail } = req.body;
    UserModel.findOne({ "userInfo.email": userEmail }).then(async docs => {
        if (docs) {
            res.send({ success: true, currentUser: docs })

        } else {
            res.send({ success: false, error: "דואר אלקטרוני שגוי", info: null })
        }
    })
})

router.put('/becomeATeacher', (req, res) => {
    const { email, shortInfo, education, teachingPlaces, subSubjects } = req.body;
    UserModel.findOne({ "userInfo.email": email }).then(async docs => {
        if (docs) {
            var mailOptions = {
                from: 'lessonsassistanceservice@gmail.com',
                to: email,
                subject: 'בקשה להיות מורה באתר שיעורי עזר!',
                html: `<p dir="rtl">הבקשה שלך התקבלה</p>
                <p dir="rtl"> הצוות שלנו יחזור לך התשובה בזמן הקרוב</p>

                <p dir="rtl"> בהצלחה,</p>
                <p dir="rtl">צוות שיעורי עזר.</p>`
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log("there was an error sending the email : ", err)
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            var mailOptions = {
                from: 'lessonsassistanceservice@gmail.com',
                to: "nemrsh1@gmail.com",
                subject: `בקשה של ${email} להיות מורה`,
                html: `<p dir="rtl">education:${education}</p>
                <p dir="rtl"> shortInfo: ${shortInfo}</p>

                <p dir="rtl"> teachingPlaces: ${teachingPlaces}</p>
                <p dir="rtl">subSubjects: ${subSubjects}</p>`
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log("there was an error sending the email : ", err)
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.send({ success: true, error: null, info: "בקשתך נשלחה לצוות שלנו!" })
        } else {
            res.send({ success: false, error: "דואר אלקטרוני שגוי", info: null })
        }
    })
})




module.exports = router;