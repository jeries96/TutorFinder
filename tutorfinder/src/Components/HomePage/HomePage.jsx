import React from 'react'
import './HomePage.css';

import {Link} from 'react-router-dom';

//Components
import SubjectCards from '../Cards/SubjectCards/SubjectCard'

import Testimonials from '../HomePage/Testimonials/Testimonials'
function HomePage (){
    
    return (
        
    <div dir="rtl" className="HomePage__subject">
        <div className ="cardsSlides">
        
        <SubjectCards/>
        
        {/* <SubjectCards /> */}
        </div>
        <div className ="HomePage__Testimonials">
        <Testimonials/>
        </div>
        {/* <Link to="/profiles"><button> Profile</button> </Link> */}
    </div>
    )   ;

}

export default HomePage;