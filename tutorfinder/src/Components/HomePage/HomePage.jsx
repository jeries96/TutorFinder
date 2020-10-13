import React from 'react'
import './HomePage.css';

import {Link} from 'react-router-dom';

//Components
import SubSubjectCard from '../Cards/SubjectCards/SubSubjectCard/SubSubjectCard'
import MainProfileCard from '../Cards/MainProfileCard/MainProfileCard'
import SubjectCards from '../Cards/SubjectCards/SubjectCard'

function HomePage (){
    
    return (
        
    <div dir="rtl" className="HomePage__subject">
        <div className ="cardsSlides">
        <SubjectCards />
        </div>
        
        <Link to="/profiles"><button> Profile</button> </Link>
    </div>
    )   ;

}

export default HomePage;