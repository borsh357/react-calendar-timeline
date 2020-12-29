import React from 'react'
import './TimelineMonth.scss'
import PropTypes from 'prop-types'

export default function TimelineMonth({ data, children }) {
  return (
    <div className="timeline-month">
      <div className="timeline-month-header">{data}</div>
      {children}
    </div>
  )
}

TimelineMonth.propTypes = {
  data: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
