import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import './TimelineRow.scss'

export default function TimelineRow({ data, events, listOfDates, beginFrom }) {
  const eventELements = []
  if (events) {
    events.forEach((event) => {
      eventELements.push(
        createEvent(event.from, event.to, event.text, beginFrom)
      )
    })
  }

  const cellsElements = []
  listOfDates.forEach((date) => {
    cellsElements.push(
      <div className={'timeline-row-cell ' + date} key={date} />
    )
  })

  return (
    <div
      className="timeline-row"
      style={{ height: 40 + 30 * (events.length - 1) }}
    >
      <div className="timeline-row-filter">{data.filter}</div>
      <div className="timeline-row-cells">{cellsElements}</div>
      <div className="events">{eventELements}</div>
    </div>
  )
}

TimelineRow.propTypes = {
  data: PropTypes.object.isRequired,
  listOfDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  beginFrom: PropTypes.string,
}

function createEvent(from, to, text, beginFrom) {
  const daysCount = Math.abs(moment(from).diff(moment(to), 'days')) + 1
  const startCell = Math.abs(moment(from).diff(beginFrom, 'days'))
  return (
    <div
      className="timeline-event"
      key={text}
      style={{ width: 40 * daysCount, marginLeft: 100 + 40 * startCell }}
    >
      {text}
    </div>
  )
}
