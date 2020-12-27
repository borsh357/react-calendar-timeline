import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './TimelineRow.scss';

export default function TimelineRow(props) {
  // const events = [];
  // props.events.forEach((event) => {
  //   events.push(createEvent(event.from, event.to, event.text));
  // });
  return (
    <div className="timeline-row">
      <div className="timeline-row-filter">{props.data.filter}</div>
      <div className="timeline-row-cells">
        {generateTimelineCells(props.listOfMonths)}
      </div>
    </div>
  );
}

TimelineRow.propTypes = {
  data: PropTypes.object.isRequired,
  listOfMonths: PropTypes.array.isRequired,
  events: PropTypes.array,
};

function generateTimelineCells(listOfMonths) {
  const arrayOfCellElements = [];
  listOfMonths.forEach((month) => {
    const startOfMonth = moment(month).startOf('month');
    const endOfMonth = moment(month).endOf('month');
    for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
      const cellRef = React.useRef(startOfMonth.format('YYYY-MM-DD'));
      arrayOfCellElements.push(
        <div
          ref={cellRef}
          className={'timeline-row-cell ' + startOfMonth.format('YYYY-MM-DD')}
          key={startOfMonth.format('YYYY-MM-DD')}
        />
      );
      startOfMonth.add(1, 'day');
    }
  });
  return arrayOfCellElements;
}

// function createEvent(from, to, text) {
//   const daysCount = Math.abs(moment(from).diff(moment(to), 'days'));
//   return (
//     <div
//       className="timeline-event"
//       style={{ width: 40 * daysCount }}
//     >
//       {text}
//     </div>
//   );
// }
