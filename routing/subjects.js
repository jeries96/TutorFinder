const mongoose = require('mongoose');
const router = express.Router();
const express = require("express");




const SubjectSchema = require('../schemas/SubjectSchema');

const SubjectModel = mongoose.model("subjectModel", SubjectSchema);



router.post('/getSubjects', (req, res) => {
  const education = req.body;
  if (education.length() != null) {
    subjects = await SubjectModel.aggregate([
      {
        $match: {
          "SubjectInfo.education": education
        }
      },
      {
        $group: {
          _id: null,
          subSubject: { $addToSet: { "label": "$diffItem.updatedField.fieldName", "value": "$diffItem.updatedField.fieldName" } },
        },
      }


    ])
  }
  else {
    subjects = await SubjectModel.aggregate([
      
    ])
  }
  res.send(subjects)
})