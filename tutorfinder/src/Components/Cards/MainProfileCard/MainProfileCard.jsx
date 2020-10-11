import React from 'react';
import { useState } from 'react';

import './MainProfileCard.css'

function MainProfileCard(props) {


  const [display,setDisplay]=useState("bio");
  const handleNavigationOptions=(option)=>{
  if(option.target.id==="ratings"){
    setDisplay("ratings")
  }
  else if(option.target.id==="picVids"){
    setDisplay("picVids")
  }
  else{
    setDisplay("bio")
  }
  }

  return (
    <div dir="rtl" className="MainProfileCard__Wrapper">
      <div className="MainProfileCard__Header">   
        <div className="MainProfileCard__Header__ProfilePicture_holder" >
          <img className="MainProfileCard__Header__ProfilePicture" src="https://prod-takelessons.netdna-ssl.com/document/profile_241617_pi_f8356e0e08cf2c1767580cedc0ab7f9e8ee156e4.jpg.webp?v=1599093909" alt="profilepicture" /></div>
        <div className="MainProfileCard__Header__ProfileInfo_holder" >
          <h2 className="MainProfileCard__Header__ProfileInfo_Name" >נסטיה רורו</h2>
          <div>rating</div>
          <div>באינטרנט</div>
        </div>
        <div className="MainProfileCard__Header__TeachingLocation_holder">
          <h6 className="MainProfileCard__Header__TeachingLocation_Title">מיקומי הוראה:
            </h6>
          <div className="MainProfileCard__Header__TeachingLocation_locations">
            <div className="MainProfileCard__Header__TeachingLocation_location">באינטרנט</div>
            <div className="MainProfileCard__Header__TeachingLocation_location">בית הסטודנטים</div>
            <div className="MainProfileCard__Header__TeachingLocation_location">בית המורה</div>
          </div>
        </div>

      </div>
    
    <ul className="MainProfileCard__Navigator">
    <li onClick={handleNavigationOptions} id="bio" className="MainProfileCard__Navigator__option">ביוגרפיה</li>
    <li onClick={handleNavigationOptions} id="ratings" className="MainProfileCard__Navigator__option">חוות דעת</li>
    <li onClick={handleNavigationOptions} id="picVids" className="MainProfileCard__Navigator__option">תמונות וסרטונים</li>
    </ul>
    {display==="bio" && <div> <h3>על נסטיה רורו</h3><p className="MainProfileCard__Bio">דיאנה דסאי קיבלה את הכשרתה לתואר ראשון במוזיקה (חליל) ב"מכללת המוזיקה של סנט פטרסבורג על שם נ 'א' רימסקי-קורסקוב ", רוסיה - אחת המכללות הטובות במדינה. עם ניסיון של 12 שנה בנגינה בחלילית, היא התחילה ללמד לפני 3 שנים, ומתמחה בהוראת ילדים בגילאי 5+.

היא למדה בהדרכתם של כמה מגדולי הפרופסורים למוזיקה בעולם בזמן שסיימה את התואר הראשון במוסיקה ברוסיה. היא השתתפה רבות בכיתות אמן עם "כוכבים" כאלה של חליל כמו עמנואל פאהוד, ג'יימס גאלווי, דניס בוריאקוב. היא הופיעה רבות עם תזמורות שונות, הרכבים קאמריים וכסולנית. היא הופיעה עם "אפולו ארטס", ארגון ללא כוונת רווח בקליפורניה מזה שנים, ואף הופיעה בתור תזמורת חליל עם תזמורת המכללה שלה בהופעה בתיאטרון מרינסקי העולמי.

ניסיון ההוראה של דיאנה כולל יותר משלוש שנים של עבודה פרטית עם סטודנטים בכל הגילאים, הרמות והרקע. היא תמיד מנסה להפוך את השיעורים שלה למרתקים ומעוררי השראה לתלמיד שלה ככל שהיא יכולה, תוך שהיא מוודאת שהם ילמדו כמה שיותר. היא משתמשת בגישות חדשניות להבנת מוסיקה ולפרשנות שלה, והיא כל הזמן לומדת ועובדת לשיפור הוראתה. ויותר מכל, לימוד חליל לאחרים הוא התשוקה של דיאנה, והיא נרגשת להתחיל את המסע הזה אל עולם המוזיקה המדהים איתך!</p> </div>}
    {display==="ratings" && <div> this is ratings</div> }
    {display==="picVids" && <div> this is picVids</div> }
    
    </div>
    
  );
}

export default MainProfileCard;