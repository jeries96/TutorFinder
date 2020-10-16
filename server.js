const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use(express.static("public"));
var secret = 'abcdefghujklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+';
module.exports = secret;
// app.use(cookies());


const url = "mongodb+srv://admin:N1N1N1N1N1@lessonsassistance.6opps.mongodb.net/server"
const mongoose = require("mongoose");
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const SubjectSchema = require("./schemas/SubjectSchema");
const SubjectModel = mongoose.model("SubjectModel", SubjectSchema);
const userRouter = require("./routing/users");

app.use("/api/users", userRouter);


// const subjectsRouter = require("./routing/subjects");
// app.use("/api/subjects", subjectsRouter);

// const mainProfileRouter = require("./routing/analytics");
// app.use("/api/analytics", mainProfileRouter);

// const matchingTeachersRouter = require("./routing/bellaRouting");
// app.use("/api/PostBellaData", matchingTeachersRouter);

// const statistics = require("./routing/statistics");
// app.use("/api/statistics", statistics);


const Data = [
  {
    SubSubjectInfo: {
      name: "מבני ניתונים",
      basicInfo: "String",
      img:"https://s8.gifyu.com/images/data-structures.jpg",
      rating:4.3,
      startingPrice:15
  },
  parents:["electricalEngineering","managmentInformationSystem"],
  id:"dataStructure"
},
{
  SubSubjectInfo: {
    name: "תכנות מונחה עצמים",
    basicInfo: "string",
    img:"https://s8.gifyu.com/images/object-oriented-programming-oop.png",
    rating:4.0,
    startingPrice:30
},
parents:["electricalEngineering","managmentInformationSystem"],
id:"objectOrientedProgramming"
},
{
  SubSubjectInfo: {
    name: "חדוו'א",
    basicInfo:"string",
    img: "https://s8.gifyu.com/images/calculus1.jpg",
    rating:3.3,
    startingPrice:8
},
parents:["electricalEngineering","managmentInformationSystem"],
id:"calculus"
},

{
  SubSubjectInfo: {
    name: "ביג דאטא",
    basicInfo: "https://s8.gifyu.com/images/data-structures.jpg",
    img:"https://s8.gifyu.com/images/bidata.jpg" ,
    rating:4.9,
    startingPrice:90
},
parents:["managmentInformationSystem"],
id:"bigData"
},
{
  SubSubjectInfo: {
    name: "סטטיסטיקה",
    basicInfo: "String",
    img:"https://s8.gifyu.com/images/statistics.jpg" ,
    rating:4.3,
    startingPrice:34
},
parents:["electricalEngineering","managmentInformationSystem","nursing"],
id:"statistics"
},
{
  SubSubjectInfo: {
    name: "אפיון ותכן",
    basicInfo: "String",
    img:"https://s8.gifyu.com/images/designPattern.png" ,
    rating:4.3,
    startingPrice:15
},
parents:["managmentInformationSystem"],
id:"characterizationAndDesign"
},





{
  SubSubjectInfo: {
    name: "אפיון ותכן",
    basicInfo: "String",
    img:"https://s8.gifyu.com/images/designPattern.png" ,
    rating:4.3,
    startingPrice:15
},
parents:["managmentInformationSystem"],
id:"haracterizationAndDesign"
},
{
  SubSubjectInfo: {
    name: "אפיון ותכן",
    basicInfo: "String",
    img:"https://s8.gifyu.com/images/designPattern.png" ,
    rating:4.3,
    startingPrice:15
},
parents:["managmentInformationSystem"],
id:"haracterizationAndDesign"
},
{
  SubSubjectInfo: {
    name: "אפיון ותכן",
    basicInfo: "String",
    img:"https://s8.gifyu.com/images/designPattern.png" ,
    rating:4.3,
    startingPrice:15
},
parents:["managmentInformationSystem"],
id:"haracterizationAndDesign"
},
]


// SubjectModel.insertMany(Data).then(console.log("Adding Success.!"));





const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log("App is Listening to port:", port);
});