import React from 'react';
import './SubjectCard.css'

function SubjectCard(props){
    const {subjectName,srcImg,price,rating}=props;
    return (
    <div>
        <div className="subject-card__Wrapper">
                
                <img className="subject-card__image" src={srcImg} alt="subjectImage" />
                <div className="subject-card__details">
                
                <div className="subject-card__name">  
                         <h3>{subjectName} </h3>
                         <h3>{rating}</h3>
                </div>

                <p className="subject-card__price"> {price}</p> 
                </div>   
        </div>
        
    </div>
    )
}

export default SubjectCard;