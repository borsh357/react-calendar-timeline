import React from 'react';
import './Timeline.scss';
import moment from 'moment';
import ListOfMonths from './ListOfMonths';
import TimelineFilterHeader from './TimelineFilterHeader';
import TimelineRow from './TimelineRow';

export default function Timeline() {
  const filters = [
    'Fred',
    'Albert',
    'Aline',
    'Mark',
    'Steve',
    'Bill',
    'Bob',
    'Andrew',
    'Alex',
    'Tom',
  ];
  const listOfMonths = generateMonths(6);

  return (
    <div className="timeline">
      <TimelineFilterHeader />
      <ListOfMonths data={listOfMonths} />
      <TimelineRow listOfMonths={listOfMonths} data={{ filter: filters[0] }} />
    </div>
  );
}

function generateMonths(numberOfMonths) {
  const arrayOfMonths = [moment().format('MMMM YYYY')];
  for (let month = 1; month < numberOfMonths; month++) {
    let newMonth = moment().add(month, 'M').format('MMMM YYYY');
    arrayOfMonths.push(newMonth);
  }
  return arrayOfMonths;
}

// <Timeline>
// <TimelineHeader data={[1, 2, 3, 4, 5, 6 , 7]} />
// <TimelineRow
//    events={[
//      {from: '2020-12-01', to: '2020-12-08', event_name: 'something 1'},
//      {from: '2020-12-02', to: '2020-12-04', event_name: 'something 2'},
//    ]}
// />
// </Timeline>
