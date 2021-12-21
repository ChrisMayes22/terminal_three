import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Music from './components/music.js';
import Poetry from './components/poetry.js';
import Navigation from './components/navigation';
import Steward from './components/steward';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Music/>}/>
          <Route path="/permissions" element={<Poetry/>}/>
          <Route path="/steward" element={<Steward/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
