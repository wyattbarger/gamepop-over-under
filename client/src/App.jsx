// importing BrowserRouter
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// page import
import StartMenu from './pages/StartMenu';
import PlayGame from './pages/PlayGame';
import Login from './pages/Login';
import EndMenu from './pages/EndMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/> 
        <Route path="/" element={<StartMenu />}/>
        <Route path="/game" element={<PlayGame />}/>
        <Route path="/endmenu" element={<EndMenu />}/>
        {/* maybe another route for a leaderboard? could maybe see about using state for leaderboard/end menu */}
        
      </Routes>
    </Router>
  );
}

export default App
