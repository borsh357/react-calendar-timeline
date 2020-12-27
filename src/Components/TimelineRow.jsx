import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './TimelineRow.scss';

export default function TimelineRow(props) {
  return (
    <div className="timeline-row">
      <div className="timeline-row-filter">{props.data.filter}</div>
      <div className="timeline-row-cells">
        {generateTimelienCells(props.listOfMonths)}
      </div>
    </div>
  );
}

TimelineRow.propTypes = {
  data: PropTypes.object.isRequired,
  listOfMonths: PropTypes.array.isRequired,
};

function generateTimelienCells(listOfMonths) {
  const arrayOfCellElements = [];
  listOfMonths.forEach((month) => {
    const startOfMonth = moment().month(month).startOf('month');
    const endOfMonth = moment().month(month).endOf('month');

    for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
      arrayOfCellElements.push(
        <div
          className={'timeline-row-cell ' + startOfMonth.format('YYYY-MM-DD')}
          key={startOfMonth.format('YYYY-MM-DD')}
        />
      );
      startOfMonth.add(1, 'day');
    }
  });
  return arrayOfCellElements;
}
