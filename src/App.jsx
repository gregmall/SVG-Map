import Map from './components/Map/Map';
import './App.css';


function App() {
  return (
    <div>
      <header className="App" style={{alignItems: 'center', display: 'flex', flexDirection:'column'}}>
        <h1>Regional Map Number Lookup</h1>
        <h3>Click a region on the map to add the corresponding phone number to the queue</h3>
      </header>
      <Map />
    </div>
  );
}

export default App;