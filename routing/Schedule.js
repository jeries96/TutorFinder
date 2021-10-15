const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer')

const PendingScheduleSchema = require('../schemas/PendingScheduleSchema')
const PendingScheduleModel = mongoose.model("PendingScheduleModel", PendingScheduleSchema)

const ExistingScheduleSchema = require('../schemas/ExistingScheduleSchema')
const ExistingScheduleModel = mongoose.model("ExistingScheduleModel", ExistingScheduleSchema)

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
      teacherName: teacherName,
      student: studentEmail,
      time: date,
      pending: true,
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
      res.send({ success: false });
      console.log("there was an error sending email", err)
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ success: true });
    }
  });

})



router.post('/getPendingLessons', async (req, res) => {
  const teacherEmail = req.body
  console.log(teacherEmail.teacherEmail)
  const pendingLessons = await PendingScheduleModel.aggregate([
    {
      $match: { "teacher": teacherEmail.teacherEmail, "pending": true, time: { $gte: new Date() } }
    },
    {
      $group: {
        _id: null,
        pendingLessonsList: { $addToSet: "$$ROOT" },
      },
    }
  ])

  if (pendingLessons.length > 0) {
    res.send({ success: true, data: pendingLessons })
  }
  else {
    res.send({ success: false })
  }


})


router.post('/getExistingLessons', async (req, res) => {
  const userEmail = req.body
  const userRole = req.body
  console.log(userEmail.userEmail)
  console.log(userRole.userRole)

  if (userRole.userRole == "teacher") {
    const existingLessons = await ExistingScheduleModel.aggregate([
      {
        $match: { "teacher": userEmail.userEmail, time: { $gte: new Date() } }
      },
      {
        $group: {
          _id: null,
          existingLessonsList: { $addToSet: "$$ROOT" },
        },
      }
    ])
  }

  if (userRole.userRole == "student") {
    const existingLessons = await ExistingScheduleModel.aggregate([
      {
        $match: { "student": userEmail.userEmail, time: { $gte: new Date() } }
      },
      {
        $group: {
          _id: null,
          existingLessonsList: { $addToSet: "$$ROOT" },
        },
      }
    ])
  }

  if (existingLessons.length > 0) {
    res.send({ success: true, data: existingLessons })
  }
  else {
    res.send({ success: false })
  }


})



router.post('/updatePendingFalse', async (req, res) => {
  let updateDataBase = req.body
  updateDataBase = updateDataBase.updateDataBase
  console.log(updateDataBase.updateDataBase)
  PendingScheduleModel.findOne({ "_id": updateDataBase._id }).then(async docs => {
    if (docs) {
      docs.pending = false;
      docs.save();
      res.send({ success: true, error: null, info: null })
    } else {
      res.send({ success: false, error: "דואר אלקטרוני שגוי", info: null })
    }
  })
})

router.post('/addToExistingLesson', async (req, res) => {
  let updateDataBase = req.body
  updateDataBase = updateDataBase.updateDataBase
  console.log(updateDataBase)


  const newExistingLesson = [{
    teacherName: updateDataBase.teacherName,
    teacher: updateDataBase.teacher,
    student: updateDataBase.student,
    time: updateDataBase.time
  }]

  var mailOptions = {
    from: 'lessonsassistanceservice@gmail.com',
    to: updateDataBase.student,
    subject: 'אישור בקשתך לקבלת שיעור עזר',
    html: `<p dir="rtl">  הזמנתך לשיעור העזר עם המורה ${updateDataBase.teacherName}  אושרה בהצלחה!</p>

  <p dir="rtl"> בהצלחה,</p>
  <p dir="rtl">צוות שיעורי עזר.</p>`


  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.send({ success: false });
      console.log("there was an error sending email", err)
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ success: true });
    }
  });
  ExistingScheduleModel.insertMany(newExistingLesson)

})


module.exports = router;
