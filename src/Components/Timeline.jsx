import React from 'react'
import './Timeline.scss'
import PropTypes from 'prop-types'
import ListOfMonths from './ListOfMonths'
import TimelineFilterHeader from './TimelineFilterHeader'
import TimelineRow from './TimelineRow'

export default function Timeline({ data }) {
  const timelineRows = data.rows.map((row, index) => {
    return (
      <TimelineRow
        key={index}
        listOfDates={data.listOfDates}
        data={{ filter: row.filterName }}
        events={row.events}
        beginFrom={data.beginFrom}
      />
    )
  })

  return (
    <div className="timeline">
      <TimelineFilterHeader />
      <ListOfMonths data={data.listOfMonths} />
      {timelineRows}
    </div>
  )
}

Timeline.propTypes = {
  data: PropTypes.object.isRequired,
}
