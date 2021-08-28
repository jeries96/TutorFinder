const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const ScheduleSchema = require('../schemas/ScheduleSchema');



const scheduleModel = mongoose.model("SchemaModel", ScheduleSchema);



router.get('/getScheduleTableTeacher',async (req, res) => {
    const arrayToSend = []
    schedules = await scheduleModel.aggregate([
        {
          $group: {
            _id: null,
            id: { $addToSet: {"teacher":"$teacher"} },
          },
        }
      ])

    res.send(arrayToSend)

})


router.get('/getScheduleTableStudent',async (req, res) => {
    const arrayToSend = []
    schedules = await scheduleModel.aggregate([
        {
          $group: {
            _id: null,
            id: { $addToSet: {"student":"$student"} },
          },
        }
      ])

    res.send(arrayToSend)

})

module.exports = router;