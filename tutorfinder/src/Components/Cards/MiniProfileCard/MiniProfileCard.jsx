import React from 'react';
import { Link } from 'react-router-dom';

import './MiniProfileCard.css'

import Filters from '../../Utilities/Filters/Filters'
function MiniProfileCard(props) {



  return (

    <div>
      <div className="MiniProfileCard__Filters"><Filters /> </div>
      
    <div dir="rtl" className="MiniProfileCard__Wrapper" >
       
      <div className="MiniProfileCard__Header__ProfilePicture_holder" >
        <img className="MiniProfileCard__Header__ProfilePicture" src="https://prod-takelessons.netdna-ssl.com/document/profile_241617_pi_f8356e0e08cf2c1767580cedc0ab7f9e8ee156e4.jpg.webp?v=1599093909" alt="profilepicture" /></div>
      <div className="MiniProfileCard__Header__ProfileInfo_holder" >
        <h2 className="MiniProfileCard__Header__ProfileInfo_Name" >נסטיה רורו</h2>
        <div>rating</div>
        <div>באינטרנט</div>
      </div>
      <div className="MiniProfileCard__Header__TeachingLocation_holder">
        <h6 className="MiniProfileCard__Header__TeachingLocation_Title">מיקומי הוראה:
            </h6>
        <div className="MiniProfileCard__Header__TeachingLocation_locations">
          <div className="MiniProfileCard__Header__TeachingLocation_location">באינטרנט</div>
          <div className="MiniProfileCard__Header__TeachingLocation_location">בית הסטודנטים</div>
          <div className="MiniProfileCard__Header__TeachingLocation_location">בית המורה</div>
        </div>
        

      </div>

      <Link to="profile" class="MiniProfileCard__Button">
        ראה פרופיל מלא
        </Link>
        <div className="MiniProfileCard__Bio">
        דיאנה דסאי קיבלה את הכשרתה לתואר ראשון במוזיקה (חליל) ב"מכללת המוזיקה של סנט פטרסבורג על שם נ 'א' רימסקי-קורסקוב ", רוסיה - אחת המכללות הטובות במדינה. עם ניסיון של 12 שנה בנגינה בחלילית, היא התחילה ללמד לפני 3 שנים, ומתמחה בהוראת ילדים בגילאי 5+.

היא למדה בהדרכתם של כמה מגדולי הפרופסורים למוזיקה בעולם בזמן שסיימה את התואר הראשון במוסיקה ברוסיה.
        </div>

    </div>

</div>


  )




}

export default MiniProfileCard;