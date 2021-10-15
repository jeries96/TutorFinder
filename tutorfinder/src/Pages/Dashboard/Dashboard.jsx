import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import Cookies, { set } from "js-cookie";
import { Link, useHistory } from 'react-router-dom'
import DashboardCards from "../../Components/DashboardCards/DashboardCards";
import Table from "../../Components/Table/Table";
import './Dashboard.css'


const Dashboard = (props) => {
    let [pendingLessons, setPendingLessons] = useState([]);
    let [existingLessons, setExistingLessons] = useState([]);
    let [pending, setPending] = useState(0);
    let [upComing, setUpComing] = useState(0);
    let [userRole, setUserRole] = useState("student")

    useEffect(() => {
        if (props.location.state != undefined) {
            setPendingLessons(props.location.state.pendingLessons)
            setPending(props.location.state.pendingLessons.length)
            setExistingLessons(props.location.state.existingLessons)
            setUpComing(props.location.state.existingLessons.length)
            setUserRole(props.location.state.userRole)
        }
    }, [])

    return (
        <div dir="rtl" className='dashboard-wrapper'>
            <div className='dashboard-cards'>
                <DashboardCards pending={pending} upComing={upComing} />
            </div>

            <div className='dashboard-table'>
                <div className='Table__Title'>שיעורים שלי</div>
                <Table status={false} ratings={true} data={existingLessons} />
            </div>
            {pendingLessons.length > 0 &&
                <div className='dashboard-table'>
                    <div className='Table__Title'>שיעורים מחכים לאישור</div>
                    <Table
                        status={true}
                        ratings={false}
                        setPendingLessons={setPendingLessons}
                        data={pendingLessons}
                        setExistingLessons={setExistingLessons}
                        existingLessons={existingLessons}
                        setUpComing={setUpComing}
                        upComing={upComing}
                        pending={pending}
                        setPending={setPending}
                        userRole={userRole}
                    />
                </div>}
        </div>
    );
}


export default Dashboard;
