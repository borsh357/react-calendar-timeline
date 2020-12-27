import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './TimelineRow.scss';
import timeline from '../js/store';

export default function TimelineRow(props) {
  const events = [];
  if (props.events) {
    props.events.forEach((event) => {
      events.push(createEvent(event.from, event.to, event.text));
    });
  }

  const cellsElements = [];
  timeline.listOfDates.forEach((date) => {
    cellsElements.push(
      <div className={'timeline-row-cell ' + date} key={date} />
    );
  });

  return (
    <div
      className="timeline-row"
      style={{ height: 40 + 30 * (events.length - 1) }}
    >
      <div className="timeline-row-filter">{props.data.filter}</div>
      <div className="timeline-row-cells">{cellsElements}</div>
      <div className="events">{events}</div>
    </div>
  );
}

TimelineRow.propTypes = {
  data: PropTypes.object.isRequired,
  listOfMonths: PropTypes.array.isRequired,
  events: PropTypes.array,
};

function createEvent(from, to, text) {
  const daysCount = Math.abs(moment(from).diff(moment(to), 'days')) + 1;
  const beginFrom = Math.abs(moment(from).diff(timeline.beginFrom, 'days'));
  return (
    <div
      className="timeline-event"
      key={text}
      style={{ width: 40 * daysCount, marginLeft: 100 + 40 * beginFrom }}
    >
      {text}
    </div>
  );
}
