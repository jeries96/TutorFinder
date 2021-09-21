const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const ScheduleSchema = require('../schemas/ScheduleSchema');
const scheduleModel = mongoose.model("SchemaModel", ScheduleSchema);



router.post('/getScheduleTableTeacher',async (req, res) => {
    const {email} = req.body
    console.log(email)
    schedules = await scheduleModel.aggregate([
      {
        $match: {"teacher":email}
    },
        {
          $group: {
            _id: null,
            availableTime: { $push: "$time" },
          },
          
        }
      ])
    console.log(schedules)
    res.send({success: true, data: schedules})

})


router.get('/getScheduleTableStudent',async (req, res) => {
    const {email} = req
    const schedules = await scheduleModel.aggregate([
        {
          $group: {
            _id: null,
            availableTime: { $addToSet: {"student":email} },
          },
        }
      ])

    res.send({success: true,data: schedules})

})

module.exports = router;