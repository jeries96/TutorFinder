const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();





const SubjectSchema = require('../schemas/SubjectSchema');

const SubjectModel = mongoose.model("subjectModel", SubjectSchema);



router.post('/getSubjects',async (req, res) => {
  const {education}=req.body;
    subjects = await SubjectModel.aggregate([
      // {
      //   $match: {
      //     "SubjectInfo.education": education
      //   }
      // },
      {
        $group: {
          _id: null,
          id: { $addToSet: {"id":"$id" , "subject": "$SubjectInfo.name" } },
        },
      }


    ])
  res.send(subjects)
})





module.exports = router;