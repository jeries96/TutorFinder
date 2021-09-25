const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer')

const PendingScheduleSchema = require('../schemas/PendingScheduleSchema')
const PendingScheduleModel = mongoose.model("PendingScheduleModel", PendingScheduleSchema)

const ScheduleSchema = require('../schemas/ScheduleSchema');
const scheduleModel = mongoose.model("SchemaModel", ScheduleSchema);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lessonsassistanceservice@gmail.com',
    pass: 'Azsx31800'
  }
});

router.post('/getScheduleTableTeacher', async (req, res) => {
  const { email } = req.body
  console.log(email)
  schedules = await scheduleModel.aggregate([
    {
      $match: { "teacher": email }
    },
    {
      $group: {
        _id: null,
        availableTime: { $push: "$time" },
      },

    }
  ])
  console.log(schedules)
  res.send({ success: true, data: schedules })

})


router.get('/getScheduleTableStudent', async (req, res) => {
  const { email } = req
  const schedules = await scheduleModel.aggregate([
    {
      $group: {
        _id: null,
        availableTime: { $addToSet: { "student": email } },
      },
    }
  ])

  res.send({ success: true, data: schedules })

})


router.post('/requestLessonTime', async (req, res) => {
  const { studentEmail, teacherEmail, date, teacherName } = req.body
  console.log(studentEmail)
  const schedules = await PendingScheduleModel.insertMany(
    {
      teacher: teacherEmail,
      student: studentEmail,
      time: date,
      requestTime: new Date(),
    },

  )
  
  var mailOptions = {
    from: 'lessonsassistanceservice@gmail.com',
    to: studentEmail,
    subject: 'תודה שהזמנתה שיעור עזר באתר שלנו',
    html: `<p dir="rtl">  הזמנתך לשיעור העזר עם המורה ${teacherName}  בתאריך התקבלה בהצלחה!</p>
    <p dir="rtl"> ברגע שהמורה מאשר את ההזמנה השיעור יקבע לך במערכת</p>
    <p dir="rtl"> ניתן לעקוב אחרי השיעורים שלך באתר שלנו</p>


    <p dir="rtl"> בהצלחה,</p>
    <p dir="rtl">צוות שיעורי עזר.</p>`


  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.send({ success: false});
      console.log("there was an error sending email", err)
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ success: true});
    }
  });

})





module.exports = router;