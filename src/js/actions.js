import React from 'react';
import time from './store';
import TableCol from '../Components/TableCol';


export function genereteDayCols() {
  const arrayOfDayColumnsElements = [];
  for (let day = time.startOfMonth.date(); day <= time.endOfMonth.date(); day++) {
    arrayOfDayColumnsElements.push(<TableCol type='day'><span>{day}</span></TableCol>);
  }
  return arrayOfDayColumnsElements;
}