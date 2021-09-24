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


const SubSubjectSchema = require("./schemas/SubSubjectSchema");
const SubSubjectModel = mongoose.model("SubSubjectModel", SubSubjectSchema);
const UserSchema = require("./schemas/UserSchema");
const UserModel = mongoose.model("UserModel", UserSchema);
const userRouter = require("./routing/users");
const ScheduleSchema = require('./schemas/ScheduleSchema');
const scheduleModel = mongoose.model("SchemaModel", ScheduleSchema);

app.use("/api/users", userRouter);


const subjectsRouter = require("./routing/subjects");
app.use("/api/subjects", subjectsRouter);

// const mainProfileRouter = require("./routing/analytics");
// app.use("/api/analytics", mainProfileRouter);

const matchingTeachersRouter = require("./routing/matchingTeachers");
app.use("/api/matchingTeachers", matchingTeachersRouter);

const scheduleRouter = require("./routing/schedule");
app.use("/api/schedule", scheduleRouter);


// const Data = [
//   {
//     SubSubjectInfo: {
//       name: "אפידמיולוגיה",
//       basicInfo: "String",
//       img:"https://s8.gifyu.com/images/epidemiology.png",
//       rating:4.3,
//       startingPrice:15
//   },
//   parents:["nursing"],
//   id:"epidemiology"
// },
// {
//   SubSubjectInfo: {
//     name: "פרמקולוגיה",
//     basicInfo: "string",
//     img:"https://s8.gifyu.com/images/pharma.png",
//     rating:4.0,
//     startingPrice:30
// },
// parents:["nursing"],
// id:"pharmacology"
// },
// {
//   SubSubjectInfo: {
//     name: "מיקרוביולוגיה",
//     basicInfo:"string",
//     img: "https://s8.gifyu.com/images/microbiology.png",
//     rating:3.3,
//     startingPrice:8
// },
// parents:["nursing"],
// id:"microbiology"
// },

// {
//   SubSubjectInfo: {
//     name: "אנטומיה",
//     basicInfo: "https://s8.gifyu.com/images/data-structures.jpg",
//     img:"https://s8.gifyu.com/images/anatomy.png" ,
//     rating:4.9,
//     startingPrice:90
// },
// parents:["nursing"],
// id:"anatomy"
// },
// {
//   SubSubjectInfo: {
//     name: "סיעוד המבוגר הכירורגי",
//     basicInfo: "String",
//     img:"https://s8.gifyu.com/images/The-surgical-adult.png" ,
//     rating:4.3,
//     startingPrice:34
// },
// parents:["nursing"],
// id:"surgicalAdult"}
// },
// {
//   SubSubjectInfo: {
//     name: "אפיון ותכן",
//     basicInfo: "String",
//     img:"https://s8.gifyu.com/images/designPattern.png" ,
//     rating:4.3,
//     startingPrice:15
// },
// parents:["managmentInformationSystem"],
// id:"characterizationAndDesign"
// },
// {
//   SubSubjectInfo: {
//     name: "תכן לוגי",
//     basicInfo: "String",
//     img:"https://s8.gifyu.com/images/logidesign.png" ,
//     rating:2.3,
//     startingPrice:50
// },
// parents:["electricalEngineering"],
// id:"Logic Design"
// },
// {
//   SubSubjectInfo: {
//     name: "הגנה ברשתות",
//     basicInfo: "String",
//     img:"https://s8.gifyu.com/images/Enterprise-Network-Protection.png" ,
//     rating:4.3,
//     startingPrice:70
// },
// parents:["electricalEngineering"],
// id:"Network protection"
// },
// {
//   SubSubjectInfo: {
//     name: "מערכות הפעלה",
//     basicInfo: "String",
//     img:"https://s8.gifyu.com/images/operationSystems.png",
//     rating:3.8,
//     startingPrice:32
// },
// parents:["electricalEngineering"],
// id:"operatingSystems"
// },
// ]
// SubSubjectModel.insertMany(Data).then(console.log("Adding Success.!"));


// const teachers=[{
//   userInfo: {
//       email: "randomgirl12@gmail.com",
//       role: "teacher",
//       password: "123"
//   },
//   userPersonalInfo:{
//       firstName: "נתאשא",
//       lastName: "ראי",
//       location:null,
//       education:null,
//       phoneNumber:null,
//       personalPhoto:"https://s8.gifyu.com/images/oldwoman1.jpg"
//   },
//   userLifeActivity:{
//     biography:`מחנכת אחיות מסורה וידענית עם יותר מ -66 שנות שירות בתחום הבריאות והחינוך העל-תיכוני. היסטוריה ארוכה של ניסיון כאחות מוסמכת במסגרת בית החולים. רישום מוכח של תוצאות כמדריך פוסט-תיכון העובד עם מועמדים לאחות. מחויבות למסירת רקע הדרכה ותיאוריה יעיל ולסיוע בפיתוח חוויות קליניות טובות יותר עבור התלמידים. התמקדה בהכנת כל מועמד לאחות להיות ספק שירותי בריאות יעיל לעתיד.`,
//     experiences:[],
//     awardsPhotos:[]
//   },
//   teaching:{
//     subSubjects:["surgicalAdult","microbiology","pharmacology","epidemiology"],
//     teachingPlaces:["באינטרנט","בית הסטודנט","בית המורה"]
//   },
//   ratings:{
//     overallRate:1.2,
//     peopleRating:[]
//   },
//   userActivity:{
//     active:true,
//     accountCreation:new Date(),
//     lastLogIn:new Date(),
//   }
// }

// ]

const times=[{
    teacher:"nemrsh1@gmail.com",
    student:"nemrsh2@Gmail.com",
    time: new Date('Sep 17, 2021  24:00:00')
}
]

//UserModel.insertMany(teachers).then(console.log("Adding Success.!"));

scheduleModel.insertMany(times).then(console.log("Adding Success.!"));





const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log("App is Listening to port:", port);
});