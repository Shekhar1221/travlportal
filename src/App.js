import './App.css';
import './css/main.css'
import Feature from './components/feature/Feature';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import SearchSection from './components/searchsection/SearchSection';
import Topbar from './components/topbar/Topbar';
import FlightSearch from './pages/flightsearch/FlightSearch';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Topbar />
       <Home />
       {/* <FlightSearch /> */}
    </div>
  );
}

export default App;
