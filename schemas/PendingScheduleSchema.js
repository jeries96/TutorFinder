const mongoose = require('mongoose');


const PendingScheduleSchema = new mongoose.Schema({
    teacher: String,
    teacherName: String,
    student: String,
    time: Date,
    pending: Boolean

})

module.exports = PendingScheduleSchema;