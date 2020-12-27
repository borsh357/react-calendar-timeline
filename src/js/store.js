// import { store } from '@risingstack/react-easy-state';
// import moment from 'moment';

// const timeline = store({
//   now: moment(),
//   listOfMonths: null,
//   startOfMonth: null,
//   endOfMonth: null,
//   filters: [
//     'Fred',
//     'Albert',
//     'Aline',
//     'Mark',
//     'Steve',
//     'Bill',
//     'Bob',
//     'Andrew',
//     'Alex',
//     'Tom',
//   ]
// });

// timeline.listOfMonths = generateMonths(6);


// function generateMonths(numberOfMonths) {
//   const arrayOfMonths = [timeline.now.format('MMMM YYYY')];
//   for (let month = 1; month < numberOfMonths; month++) {
//     let newMonth = timeline.now.add(month, 'M').format('MMMM YYYY');
//     arrayOfMonths.push(newMonth);
//   }
//   return arrayOfMonths;
// }
// export default timeline;