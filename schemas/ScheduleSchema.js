const mongoose = require('mongoose');


const ScheduleSchema = new mongoose.Schema({
    id: String,
    teacher: String,
    student: String,
    time: Date

})

module.exports = ScheduleSchema;