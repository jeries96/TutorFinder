const mongoose = require('mongoose');


const ExistingScheduleSchema = new mongoose.Schema({
    teacher: String,
    teacherName: String,
    student: String,
    time: Date,
    requestTime: Date

})

module.exports = ExistingScheduleSchema;