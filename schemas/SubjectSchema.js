const mongoose = require('mongoose');
const SubSubjects = require('./SubSubjects')
const SubjectSchema = new mongoose.Schema({
    SubjectInfo: {
        name: String,
        basicInfo: String,
        img:Image,
        education:String
    },
    SubSubjects:SubSubjects,
})





module.exports = SubjectSchema;