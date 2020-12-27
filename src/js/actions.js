// //import React from 'react';
// import timeline from './store';

// export function generateDaysOfMonth(month) {
//   const startOfMonth = timeline.now.month(month).startOf('month');
//   const endOfMonth = timeline.now.month(month).endOf('month');
//   const arrayOfDays = [];
//   console.log(startOfMonth);
//   for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
//     arrayOfDays.push(startOfMonth.format('YYYY-MM-DD'));
//     startOfMonth.add(1, 'day');
//   }
//   return arrayOfDays;
  
// }