import React from 'react';
import './SubSubjectCard.css'

function SubSubjectCard(props){
    const {subjectName,srcimg,price,rating}=props;
    return (
    <div>
        <div className="SubSubject-card__Wrapper">
                <div className="SubSubjectCard__image">
                <img className="SubSubject-card__image" src={srcimg} alt="subjectImage" />
                </div>
                <div className="SubSubject-card__details">
                
                <div id="SubSubject-card__name">  
                         <h3 id="SubSubject-card__name--visible">{subjectName} </h3>
                         <h3>({rating})</h3>
                </div>

                <p className="SubSubject-card__price"> {price}</p> 
                </div>   
        </div>
        
    </div>
    )
}

export default SubSubjectCard;