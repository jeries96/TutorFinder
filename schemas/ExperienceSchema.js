const mongoose = require('mongoose');
const UserSchema = require('./UserSchema');

const ExperienceSchema = new mongoose.Schema({
  ExperienceInfo: {
        user:UserSchema,
        subject:String,
        description:String,
        img:[Image]
    }
})





module.exports = ExperienceSchema;