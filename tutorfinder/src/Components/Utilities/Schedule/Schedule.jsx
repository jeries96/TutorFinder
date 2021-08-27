import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Schedule.css';
import leftArrow from '../../../utils/left-arrow.png'
import { Link , useHistory} from 'react-router-dom';


import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
function Schedule (){
    let history = useHistory();

    const data = [{
        Id: 2,
        Subject: 'Meeting',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
        IsAllDay: false,
        Status: 'Completed',
        Priority: 'High'
    }];
     
        return  (
            <div>
        <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                isAllDay: { name: 'IsAllDay' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
        }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
    <div id='GOBACK__Button_LOCATOR'>
          <Link to='/profile'>
          <img id='backarrowImage' src={leftArrow} />
          </Link>
        </div>
    </div>
    )
    }
;

export default Schedule;