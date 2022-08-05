import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Achievements from "./components/Achievements/Achievements";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Gallery from "./components/Gallery/Gallery";
import Err404 from "./components/Err404/Err404";
function App() {
  return (
      <div className="page">
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/nav" element={<Navbar/>} />
                  <Route path="/achievements" element={<Achievements/>} />
                  <Route path="/footer" element={<Footer/>} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="*" element={<Err404 />} />
              </Routes>
          </Router>
      </div>
  );
}
export default App;
