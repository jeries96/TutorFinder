const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();





const SubjectSchema = require('../schemas/SubjectSchema');
const SubjectModel = mongoose.model("subjectModel", SubjectSchema);

const SubSubjectSchema = require('../schemas/SubSubjectSchema');
const SubSubjectModel = mongoose.model("subSubjectModel", SubSubjectSchema);



router.get('/getSubjects', async (req, res) => {
  const arrayToSend = [];
  // const {education}=req.body;
  subjects = await SubjectModel.aggregate([
    // {
    //   $match: {
    //     "SubjectInfo.education": education
    //   }
    // },
    {
      $group: {
        _id: null,
        id: { $addToSet: { "id": "$id", "subject": "$SubjectInfo.name" } },
      },
    }


  ])
  // subjects[0].id.map(async(subject,index)=> {
  //     SubSubjectModel.find({ parents: subject }).then(subjects=>{
  //       console.log(subjects)
  //     })



  // })
  await Promise.all(subjects[0].id.map(async (subject, index) => {
    subjectsOfSubject = await SubSubjectModel.aggregate([
      {
        $match: { "parents": subject.id }

      },
      {
        $group: {
          _id: "$$ROOT",
        },
      }

    ])
    arrayToSend.push({ subjectName: subject.subject, subsubjects: subjectsOfSubject })

  }))

  res.send(arrayToSend)
})





module.exports = router;