import Map from './components/Map/Map';
// import map from './map.svg'
import './App.css';


function App() {
  return (
    <div className="App" style={{alignItems: 'center', display: 'flex', flexDirection:'column'}}>
      <header >
        <h1>Map Challenge</h1>
          
      </header>
      <Map />
    </div>
  );
}

export default App;