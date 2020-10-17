const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    id:String,
    SubjectInfo: {
        name: String,
        basicInfo: String,
        img:String,
        education:String
    }
})





module.exports = SubjectSchema;