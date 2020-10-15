const mongoose = require('mongoose');

const SubSubjectSchema = new mongoose.Schema({
    SubSubjectInfo: {
        name: String,
        basicInfo: String,
        img:Image,
        rating:Number,
        startingPrice:Number
    }
})





module.exports = SubSubjectSchema;