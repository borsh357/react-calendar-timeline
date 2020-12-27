import React from 'react';
import './TimelineMonth.scss';
import PropTypes from 'prop-types';

export default function TimelineMonth(props) {
  return (
    <div className="timeline-month">
      <div className="timeline-month-header">{props.data}</div>
      {props.children}
    </div>
  );
}

TimelineMonth.propTypes = {
  data: PropTypes.string.isRequired,
  children: PropTypes.element,
};
