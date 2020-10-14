const mongoose = require('mongoose');
const router = express.Router();
const express = require("express");
const UserSchema = require('../schemas/UserSchema');



const userModel = mongoose.model("UserModel", UserSchema);




router.post('/getTeachers', (req, res) => {
const teachingPlaces=req.body;
const subSubject=req.body;

if(teachingPlaces.length()!=0){
 
    let placesArray = []
    functionalTest.map((place, index) => {
      placesArray.push({ "teaching.teachingPlace": place })
    })
    filtersArray.push({ "$or": placesArray })

}




})








