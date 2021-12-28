import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Art from './components/Art';


import MiniCart from './components/MiniCart';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  `

function App() {
  const [showMiniCart, setMiniCart] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <Router>
      <Navbar showMiniCart={showMiniCart} setMiniCart={setMiniCart} />
      <MiniCart showMiniCart={showMiniCart} setMiniCart={setMiniCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
