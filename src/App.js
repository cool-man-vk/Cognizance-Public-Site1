import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
function App() {
  return (
            <div className="page">
                    <Navbar/>
                    <Home/>
            </div>
  );
}
export default App;
