import React from 'react'
import './ListOfMonths.scss'
import PropTypes from 'prop-types'
import moment from 'moment'

import TimelineMonth from './TimelineMonth'
import TimelineHeader from './TimelineHeader'

export default function ListOfMonths({ data }) {
  const months = data
  return (
    <div className="timeline-months">
      {gererateListOfMonthsElements(months)}
    </div>
  )
}

ListOfMonths.propTypes = {
  data: PropTypes.array.isRequired,
}

function gererateListOfMonthsElements(arrayOfMonths) {
  const listOfMonthsElements = []
  arrayOfMonths.forEach((month) => {
    listOfMonthsElements.push(
      <TimelineMonth data={month} key={month}>
        <TimelineHeader data={generateDaysOfMonth(month)} />
      </TimelineMonth>
    )
  })
  return listOfMonthsElements
}

function generateDaysOfMonth(month) {
  const startOfMonth = moment(month).startOf('month')
  const endOfMonth = moment(month).endOf('month')
  const arrayOfDays = []
  for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
    arrayOfDays.push(startOfMonth.format('YYYY-MM-DD'))
    startOfMonth.add(1, 'day')
  }
  return arrayOfDays
}
