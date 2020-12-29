import React from 'react'
import './App.css'
import Timeline from './Components/Timeline'
import moment from 'moment'

function App() {
  const timelineData = {
    listOfMonths: generateMonths(6),
    listOfDates: generateDateCells(generateMonths(6)),
    beginFrom: generateDateCells(generateMonths(6))[0],
    rows: [
      {
        filterName: 'Fred',
        events: [
          { from: '2020-12-01', to: '2020-12-08', text: 'I' },
          { from: '2020-12-02', to: '2020-12-12', text: 'Am' },
          { from: '2020-12-14', to: '2021-01-04', text: 'Sorry' },
        ],
      },
      {
        filterName: 'Steve',
        events: [
          { from: '2020-12-03', to: '2020-12-06', text: 'For' },
          { from: '2020-12-05', to: '2020-12-7', text: 'This' },
        ],
      },
      {
        filterName: 'Joe',
        events: [{ from: '2020-12-09', to: '2020-12-16', text: 'Bad' }],
      },
      {
        filterName: 'Mark',
        events: [{ from: '2020-12-01', to: '2020-12-08', text: 'Code' }],
      },
    ],
  }

  return (
    <div className="App">
      <Timeline data={timelineData} />
    </div>
  )
}

export default App

function generateMonths(numberOfMonths) {
  const arrayOfMonths = [moment().format('MMMM YYYY')]
  for (let month = 1; month < numberOfMonths; month++) {
    let newMonth = moment().add(month, 'M').format('MMMM YYYY')
    arrayOfMonths.push(newMonth)
  }
  return arrayOfMonths
}

function generateDateCells(listOfMonths) {
  const arrayOfDateCells = []
  listOfMonths.forEach((month) => {
    const startOfMonth = moment(month).startOf('month')
    const endOfMonth = moment(month).endOf('month')
    for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
      arrayOfDateCells.push(startOfMonth.format('YYYY-MM-DD'))
      startOfMonth.add(1, 'day')
    }
  })
  return arrayOfDateCells
}
