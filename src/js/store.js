import { store } from '@risingstack/react-easy-state';
import moment from 'moment';

const time = store({
  now: moment(),
  month: null,
  year: null,
  startOfMonth: null,
  endOfMonth: null,
});

time.month = time.now.format('MMMM');
time.year = time.now.year();
time.startOfMonth = moment(time.now).startOf('month');
time.endOfMonth = moment(time.now).endOf('month');


console.log(time.startOfMonth)
export default time;