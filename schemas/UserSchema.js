const mongoose = require('mongoose');
const ExperienceSchema = require('./ExperienceSchema');
const SubSubjectSchema = require('./SubSubjectSchema');

const UserSchema = new mongoose.Schema({
    userInfo: {
        email: String,
        role: String,
        password: String
    },
    userPersonalInfo:{
        firstName: String,
        lastName: String,
        location:String,
        education:String,
        phoneNumber:String,
        personalPhoto:String
    },
    userLifeActivity:{
      biography:String,
      experiences:[],
      awardsPhotos:[]
    },
    teaching:{
      subSubjects:[],
      teachingPlace:[String]
    },
    ratings:{
      overallRate:Number,
      peopleRating:[]
    },
    userActivity:{
      active:Boolean,
      accountCreation:Date,
      lastLogIn:Date,
    }
})





module.exports = UserSchema;