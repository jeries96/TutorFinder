const mongoose = require('mongoose');


const PendingScheduleSchema = new mongoose.Schema({
    teacher: String,
    student: String,
    time: Date,
    requestTime: Date

})

module.exports = PendingScheduleSchema;