
import './App.css';
import StatefullGreeting from "./components/StatefullGreeting"
import EventsFunctional from './components/EventsFunctional'
import EventsClass from './components/EventsClass'


function App() {
  return (
    <div className="App">
      <StatefullGreeting  greeting="I'm a statefull class component" name="Mike" />
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;