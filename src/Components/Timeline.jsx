import React from 'react';
import './Timeline.scss';
import moment from 'moment';
import ListOfMonths from './ListOfMonths';
import TimelineFilterHeader from './TimelineFilterHeader';
import TimelineRow from './TimelineRow';
import timeline from '../js/store';
console.log(timeline);

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
      <TimelineRow
        listOfMonths={listOfMonths}
        data={{ filter: filters[0] }}
        events={[
          { from: '2020-12-01', to: '2020-12-08', text: 'I' },
          { from: '2020-12-02', to: '2020-12-12', text: 'Am' },
          { from: '2020-12-14', to: '2021-01-04', text: 'Sorry' },
        ]}
      />
      <TimelineRow
        listOfMonths={listOfMonths}
        data={{ filter: filters[1] }}
        events={[
          { from: '2020-12-03', to: '2020-12-06', text: 'For' },
          { from: '2020-12-05', to: '2020-12-7', text: 'This' },
        ]}
      />
      <TimelineRow
        listOfMonths={listOfMonths}
        data={{ filter: filters[2] }}
        events={[{ from: '2020-12-09', to: '2020-12-16', text: 'Bad' }]}
      />
      <TimelineRow
        listOfMonths={listOfMonths}
        data={{ filter: filters[3] }}
        events={[{ from: '2020-12-01', to: '2020-12-08', text: 'Code' }]}
      />
      <TimelineRow listOfMonths={listOfMonths} data={{ filter: filters[4] }} />
      <TimelineRow listOfMonths={listOfMonths} data={{ filter: filters[5] }} />
      <TimelineRow listOfMonths={listOfMonths} data={{ filter: filters[6] }} />
      <TimelineRow listOfMonths={listOfMonths} data={{ filter: filters[7] }} />
      <TimelineRow listOfMonths={listOfMonths} data={{ filter: filters[8] }} />
      <TimelineRow listOfMonths={listOfMonths} data={{ filter: filters[9] }} />
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
