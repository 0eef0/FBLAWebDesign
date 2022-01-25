import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products'
import Contact from './Components/Contact'

const getTempPage = (str) => {
    return <h1>{str}</h1>
};

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <p style={{height: '10vh'}} />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='contact' element={getTempPage(<Contact/>)} />
                    <Route path='about' element={getTempPage('About')} />
                    <Route path='products' element={getTempPage(<Products/>)} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
