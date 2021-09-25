import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import Cookies from "js-cookie";
import { Link, useHistory } from 'react-router-dom'
import DashboardCards from "../../Components/DashboardCards/DashboardCards";
import Table from "../../Components/Table/Table";



const Dashboard = (props) => {

    return (
        <div className='dashboard-wrapper'>
            <div className='dashboard-cards'>
                <DashboardCards />
            </div>
            
            <div className='dashboard-table'>
                <Table />
            </div>

        </div>
    );
}


export default Dashboard;
