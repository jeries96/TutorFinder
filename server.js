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

app.use("/api/users", userRouter);


const subjectsRouter = require("./routing/subjects");
app.use("/api/subjects", subjectsRouter);

// const mainProfileRouter = require("./routing/analytics");
// app.use("/api/analytics", mainProfileRouter);

const matchingTeachersRouter = require("./routing/matchingTeachers");
app.use("/api/matchingTeachers", matchingTeachersRouter);

// const statistics = require("./routing/statistics");
// app.use("/api/statistics", statistics);


// const Data = [
//   {
//     SubSubjectInfo: {
//       name: "מבני ניתונים",
//       basicInfo: "String",
//       img:"https://s8.gifyu.com/images/data-structures.jpg",
//       rating:4.3,
//       startingPrice:15
//   },
//   parents:["electricalEngineering","managmentInformationSystem"],
//   id:"dataStructure"
// },
// {
//   SubSubjectInfo: {
//     name: "תכנות מונחה עצמים",
//     basicInfo: "string",
//     img:"https://s8.gifyu.com/images/object-oriented-programming-oop.png",
//     rating:4.0,
//     startingPrice:30
// },
// parents:["electricalEngineering","managmentInformationSystem"],
// id:"objectOrientedProgramming"
// },
// {
//   SubSubjectInfo: {
//     name: "חדוו'א",
//     basicInfo:"string",
//     img: "https://s8.gifyu.com/images/calculus1.jpg",
//     rating:3.3,
//     startingPrice:8
// },
// parents:["electricalEngineering","managmentInformationSystem"],
// id:"calculus"
// },

// {
//   SubSubjectInfo: {
//     name: "ביג דאטא",
//     basicInfo: "https://s8.gifyu.com/images/data-structures.jpg",
//     img:"https://s8.gifyu.com/images/bidata.jpg" ,
//     rating:4.9,
//     startingPrice:90
// },
// parents:["managmentInformationSystem"],
// id:"bigData"
// },
// {
//   SubSubjectInfo: {
//     name: "סטטיסטיקה",
//     basicInfo: "String",
//     img:"https://s8.gifyu.com/images/statistics.jpg" ,
//     rating:4.3,
//     startingPrice:34
// },
// parents:["electricalEngineering","managmentInformationSystem","nursing"],
// id:"statistics"
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


const teachers=[{
  userInfo: {
      email: "nemrsh11@gmail.com",
      role: "teacher",
      password: "123"
  },
  userPersonalInfo:{
      firstName: "נימר",
      lastName: "שמאס",
      location:null,
      education:null,
      phoneNumber:null,
      personalPhoto:"https://s8.gifyu.com/images/nimer.jpg"
  },
  userLifeActivity:{
    biography:`הורים ותלמידים יקרים,

    האם אוכל להיות מורה אישי עבורך או עבור ילדך? אני מלמד בהצלחה למעלה מ 12 שנים. יש לי התייחסויות נהדרות, ואני אחד המורים המובילים כי כל כך קל לעבוד איתי. אני מלמד באופן אישי או באמצעות כיתת TakeLessons, זום, סקייפ, FaceTime, Google Hangouts, לוחות אינטראקטיביים, שולחן עבודה מרוחק וכו '. אני יכול גם לספק חומר לימודי חינם לנושאים / נושאים שלך. סיימתי את לימודי התואר בהצטיינות, Summa Cum Laude מאוניברסיטת קייס ווסטרן ריזרב, שם עליתי לרשימת הדיקן. זכיתי גם במלגה אקדמית פרובוסט על ציוני המבחנים המעולים שלי, כולל 34 במתמטיקה של ACT ו- 780 במתמטיקה SAT.
    <br>
    בנוסף להוראה לבתי ספר בקליבלנד, אני מלמד כיום 20 מפגשים פרטיים בכל שבוע, כיתות א'-יב ', כמו גם סטודנטים ואנשי מקצוע בתחום העסקים. כיהנתי גם בפקולטה במכללה הקהילתית Cuyahoga.
    <br>
    אני סבלני, ידידותי ותלמידים רבים אומרים לי שאני מסביר מושגים בצורה יעילה יותר ממוריהם. אני זמין בימי חול או בסופי שבוע, בימים או בלילות, לאורך כל השנה. אשמח לענות על כל שאלה שיש לכם בנוגע לניסיון שלי ולשיטות הלימוד שלי. אמנם זה צריך להיות מובן מאליו, אבל יש לי רקע נקי שאומת על ידי ה- FBI ו- BCI. ספר לי אם ברצונך להקים שיעור היכרות לעיצוב אסטרטגיה מותאמת אישית. אין חובה להמשיך אלא אם כן אתה מרוצה ב 100%.
    <br>
    אני אחד מחמשת המורים המובילים ל:
    1. נושא המגוון ביותר
    2. טווח גיל הסטודנטים הרחב ביותר
    3. האזורים הגיאוגרפיים הרחוקים ביותר
    4. בסיס הלקוחות הגדול ביותר
    5. רוב השעות הנלמדות מדי חודש
    <br>
    שימו לב: הגדרתי את החיוב במרווחים של שלושים דקות. לפיכך, אני יכול להציע שיעורים באורכים שונים של 30, 60, 90 או 120 דקות. עם זאת, אני מעריך הפעלות ארוכות יותר מ -30 דקות. אני מודה לך על הזמן וההתחשבות ומצפה לעמוד לשירותך!
    <br>
    הנושאים שלי כוללים:
    ACT, SAT, PSAT, NMSQT - קבלה לתואר ראשון
    GMAT, GRE - קבלות בוגרים
    ISEE, HSPT, SSAT, TACHS, COOP - אישורי תיכון
    ASVAB, AFQT, ASTB-E, OAR - הצבת כוחות מזוינים
    TOEFL, IELTS, TOEIC - אנגלית כשפה שנייה
    PARCC, AIR AST, OAA, OGT, ITBS, STAAR, GED, HiSET, TABE - בקיאות
    HESI-A2, ATI TEAS V, NLN-PAX-RN, C-NET-RN, NET, DAT - סיעוד ושיניים
    <br>
    מתמטיקה: אלגברה I ו- II, גיאומטריה, טריגונומטריה, קדם-אלגברה, יסודי
    אנגלית: דקדוק, אוצר מילים, איות, קריאה, כתיבה, האזנה, דיבור, הגייה, ESL, ESOL
    עבודות מחקר: עריכה, הגהה, מתווה, ניתוח, ציטוטים
    מחשב: Excel, Word, PowerPoint, QuickBooks
    צרכים מיוחדים: הפרעות קשב וריכוז, דיסלקציה, אוטיזם, אספרגר, כישורי לימוד
    מוסיקה: תיאוריה, אימון אוזניים, שירת ראייה, אלתור, סקסופון
    חיפוש עבודה: כתיבת קורות חיים, מכתבים מקדישים, מכתבי T, לינקדאין, טכניקות חיפוש עבודה
    שירותים מקצועיים: הנהלת חשבונות, AP / AR, ניהול נכסים, אוטומציה למשרדים
    <br>
    *** ציוד סטודיו ***
    מחשבים ניידים של Microsoft Windows ו- Macintosh
    <br>
    *** ציוד נסיעות ***
    מחשבים ניידים של Microsoft Windows ו- Macintosh`,
    experiences:[],
    awardsPhotos:[]
  },
  teaching:{
    subSubjects:[],
    teachingPlaces:["באינטרנט","בית הסטודנט","בית המורה"]
  },
  ratings:{
    overallRate:4.9,
    peopleRating:[]
  },
  userActivity:{
    active:true,
    accountCreation:new Date(),
    lastLogIn:new Date(),
  }
}

]

// UserModel.insertMany(teachers).then(console.log("Adding Success.!"));






const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log("App is Listening to port:", port);
});