import React from "react";



import './DashboardCards.css'


const DashboardCards = (props) => {
    const { pending, upComing } = props
    return (
        <div>
            <div class="main-section">
                <div className="dashbord">
                    <div className="icon-section">
                        <small>שיעורים שלי</small>
                        <p>{upComing}</p>
                    </div>
                </div>
                <div className="dashbord dashbord-green">
                    <div className="icon-section">
                        <small>שיעורים מחכים לאישור</small>
                        <p>{pending}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardCards;