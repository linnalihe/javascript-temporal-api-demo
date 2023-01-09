import logo from './logo.svg';
import './App.css';
import { Temporal } from '@js-temporal/polyfill';


const timeRightNow = Temporal.Now.plainDateTimeISO()
const timeRightNowWithZone = Temporal.Now.zonedDateTimeISO()
console.log(timeRightNow)
console.log(timeRightNowWithZone)
console.log(new Date())

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <p>Time right now: {timeRightNowWithZone.zonedDateTimeISO}</p>
        <p>Year right now: {timeRightNowWithZone.year}</p>
        <p>Month right now: {timeRightNowWithZone.month}</p>
        <p>Day of month right now: {timeRightNowWithZone.day}</p>
        <p>Hour right now: {timeRightNowWithZone.hour}</p>
      </header>
    </div>
  );
}

export default App;
