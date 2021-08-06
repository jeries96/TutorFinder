import React from 'react'
import './HomePage.css';
//Components
import SubjectCards from '../../Components/Cards/SubjectCards/SubjectCard'

import Testimonials from '../HomePage/Testimonials/Testimonials'
import { useState,useEffect } from 'react';
import MainPageProfile from './MainPageProfile';
function HomePage (){
const [subjectCardsToDisplay,setSubjectCardsToDisplay]=useState([])
    useEffect(() => {
        fetch('/api/subjects/getSubjects')
            .then(res => res.json())
            .then(data => {
                setSubjectCardsToDisplay(data)
            })
    }, [])
    return (
    <div dir="rtl" className="HomePage__subject">
        <div>{MainPageProfile}</div>
        <div className ="cardsSlides">
        {subjectCardsToDisplay.length>0 && <SubjectCards subjectsData={subjectCardsToDisplay}/>}    
        </div>
        <div className ="HomePage__Testimonials">
        <Testimonials/>
        </div>
    </div>
    )   ;
}

export default HomePage;