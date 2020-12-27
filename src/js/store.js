import {store} from '@risingstack/react-easy-state';
import moment from 'moment';

const timeline = store({
  listOfMonths: generateMonths(6),
  listOfDates: null,
  beginFrom: null,
});
export default timeline;

timeline.listOfDates = generateDateCells(timeline.listOfMonths);
timeline.beginFrom = timeline.listOfDates[0];

function generateMonths(numberOfMonths) {
  const arrayOfMonths = [moment().format('MMMM YYYY')];
  for (let month = 1; month < numberOfMonths; month++) {
    let newMonth = moment().add(month, 'M').format('MMMM YYYY');
    arrayOfMonths.push(newMonth);
  }
  return arrayOfMonths;
}

function generateDateCells(listOfMonths) {
  const arrayOfDateCells = [];
  listOfMonths.forEach((month) => {
    const startOfMonth = moment(month).startOf('month');
    const endOfMonth = moment(month).endOf('month');
    for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
      arrayOfDateCells.push(startOfMonth.format('YYYY-MM-DD'));
      startOfMonth.add(1, 'day');
    }
  });
  return arrayOfDateCells;
}