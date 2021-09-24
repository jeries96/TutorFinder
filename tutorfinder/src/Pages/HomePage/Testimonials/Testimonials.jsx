import React from 'react';
import './Testimonials.css';

function Testimonials(){


    return (
     <div className="Testimonials__container">
            <h2 className="title"> תבחר מי מתאים לך בקלות</h2>

            <div className="star">
            <div className="Testimonials__icon">
                <img src="https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/star.png" alt="logo" />
            </div>
            <div className="Testimonials__title">
                <h2> מורים מעולים </h2>
            </div>
            <div className="Testimonials__description">
              
            </div>

            </div>

            <div className="expert">
            <div className="Testimonials__icon">
                <img src="https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/personalized.png" alt="logo"/>
            </div>
            <div className="Testimonials__title">
                <h2> גמישות </h2>
            </div>
            <div className="Testimonials__description">
               
            </div>

            </div>

            <div className="stam">
            <div className="Testimonials__icon">
                <img src="https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/guaranteed.png" alt="logo" />
            </div>
            <div className="Testimonials__title">
                <h2> מוגן 100% </h2>
            </div>
            <div className="Testimonials__description">
                    
            </div>

            </div>
    </div>
    )
}


export default Testimonials;