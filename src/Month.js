import React from 'react';
import Day from './Day'

function Month (){
    const days = [];
    const temp = new Date();
    const daysInMonth = new Date(temp.getFullYear(), temp.getMonth()+1, 0).getDate();
    for(let i = 1; i <=daysInMonth; i++){
        days.push(<div id= 'week-days'>{i}<Day dayNumber = {i} key = {`Day ${i}`}></Day></div>)
    }
    return(
        <div id = "Month">
            {days}
        </div>
    )
}

export default Month;