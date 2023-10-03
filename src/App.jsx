import Map from './components/Map/Map';
import './App.css';


function App() {
  return (
    <div>
      <header className="App" style={{alignItems: 'center', display: 'flex', flexDirection:'column'}}>
        <h1>Regional Map Number Lookup</h1>
        <span>Click a region on the map to add the corresponding phone number to the queue</span>
        <span>Clicking an already selected region will remove the number from the queue</span>
      </header>
      <Map />
    </div>
  );
}

export default App;