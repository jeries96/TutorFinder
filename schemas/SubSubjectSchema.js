const mongoose = require('mongoose');

const SubSubjectSchema = new mongoose.Schema({
    SubSubjectInfo: {
        name: String,
        basicInfo: String,
        img: String,
        rating: Number,
        startingPrice: Number
    },
    parents: [],
    id: String,
})





module.exports = SubSubjectSchema;