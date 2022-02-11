import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import About from './Components/About';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <p style={{height: '10vh'}} />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='contact' element={<Contact/>} />
                    <Route path='about' element={<About />} />
                    <Route path='products' element={<Products/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
