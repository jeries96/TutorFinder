const mongoose = require('mongoose');


const ScheduleSchema = new mongoose.Schema({
    id: String,
    participants:{
        teacher:String,
        student:String
    },
    ScheduleInformations:{
    subject: String,
    startTime: Date,
    endTime: Date,
    isAllDay: Boolean
    }
})

module.exports = ScheduleSchema;