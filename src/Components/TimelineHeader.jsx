import React from 'react'
import './TimelineHeader.scss'
import PropTypes from 'prop-types'
import moment from 'moment'

export default function TimelineHeader({ data }) {
  const listOfDays = []
  data.forEach((day) => {
    if (moment(day).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
      listOfDays.push(
        <div className="timeline-header-cell -current" key={day}>
          {moment(day).format('DD')}
        </div>
      )
      return
    }
    listOfDays.push(
      <div className="timeline-header-cell" key={day}>
        {moment(day).format('DD')}
      </div>
    )
  })
  return <div className="timeline-header">{listOfDays}</div>
}

TimelineHeader.propTypes = {
  data: PropTypes.array.isRequired,
}
