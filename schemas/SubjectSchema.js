const mongoose = require('mongoose');
const SubSubjects = require('./SubSubjects')
const SubjectSchema = new mongoose.Schema({
    SubjectInfo: {
        name: String,
        basicInfo: String,
        img:String,
        education:String
    },
    SubSubjects:SubSubjects,
})





module.exports = SubjectSchema;