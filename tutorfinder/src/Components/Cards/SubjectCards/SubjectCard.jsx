import React from 'react';
import './SubjectCard.css'
// For image slider 
import Carousel from 'react-elastic-carousel';
//Components : 
import SubSubjectCard from '../SubjectCards/SubSubjectCard/SubSubjectCard'
import { Link } from 'react-router-dom';

export const dataContext=createContext();
function SubjectCard(props) {
    const subjectsData=props
    const breakPoints = [
        { width: 1, itemsToShow: 1, showArrows: false },
        { width: 450, itemsToShow: 1, itemsToScroll: 2, showArrows: false },
        { width: 650, itemsToShow: 2.5, showArrows: true },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2, enableMouseSwipe: false },
        { width: 1450, itemsToShow: 5, enableMouseSwipe: false },
        { width: 1750, itemsToShow: 6, enableMouseSwipe: false },
    ]

    

    return (
        <div className="SubjectCard__Wrapper">
            <div className="SubjectCard__WrapperTitle">
                <h2> צברו כישורים, תיהנו, ובנו לכם ידע טוב יותר</h2>
            </div>
            {subjectsData.subjectsData.length > 0 && subjectsData.subjectsData.map((subject, index) => {

                return (<div>
                    {subject.subsubjects.length !== 0 && <h3 className="SubjectCard__Title"> {subject.subjectName}</h3>}
                    {subject.subsubjects.length !==0 &&
                        <Carousel className="cardsSlides" breakPoints={breakPoints}  >

                            {subject.subsubjects.map((subSubject, index) => {
                                return (
                                    <Link dir="rtl" to={{pathname:"/teachers",
                                                         aboutProps:{name:subSubject._id.id} }}>
                                        <SubSubjectCard
                                            key={subSubject._id.id}
                                            subjectName={subSubject._id.SubSubjectInfo.name}
                                            srcimg={subSubject._id.SubSubjectInfo.img}
                                            price={subSubject._id.SubSubjectInfo.startingPrice}
                                            rating={subSubject._id.SubSubjectInfo.rating} /></Link>


                                )

                            })}</Carousel>}
                </div>)
            })
            }
        </div>

    );
}

export default SubjectCard;