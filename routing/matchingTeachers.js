const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const UserSchema = require('../schemas/UserSchema');



const userModel = mongoose.model("UserModel", UserSchema);




router.post('/getTeachers', async (req, res) => {
let subSubject=req.body;
subSubject=subSubject.subSubject.name
// if(teachingPlaces.length!=0){
 
//     let placesArray = []
//     teachingPlaces.map((place, index) => {
//       placesArray.push({ "teaching.teachingPlace": place })
//     })
//     filtersArray.push({ "$or": placesArray })

// }

teachers= await userModel.aggregate([
  {
    $match:{"teaching.subSubjects":subSubject,"userInfo.role":"teacher"}
    }
  ,
{
  $group: {
      _id:null,
       teachers:{$push: "$$ROOT"} ,
  },
}
])
if(teachers.length>0){
  teachers[0]._id=true; 
  teachers[0].teachers.map((eachuser)=>{
  eachuser.userInfo.password=null;
})
}else{
  teachers={_id:false,message:"אין מורים שמלמדים הנושה הזה"}
}
res.send(teachers)
})








module.exports = router;