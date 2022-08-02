import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
// import Err404 from './components/Err404/Err404';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Achievements from "./components/Achievements/Achievements";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
function App() {
  return (
      <div className="page">
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/Nav" element={<Navbar/>} />
                  <Route path="/Achievements" element={<Achievements/>} />
                  <Route path="/Footer" element={<Footer/>} />
                  <Route path="/Team" element={<Team />} />
                  {/* <Route path="*" element={<Err404/>} /> */}
              </Routes>
          </Router>
      </div>
  );
}
export default App;
