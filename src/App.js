import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
function App() {
  return (
    <>
            <div className="page">
                    <Navbar/>
                    <Home/>
            </div>
            <Footer/>
    </>
  );
}
export default App;
