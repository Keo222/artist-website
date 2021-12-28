import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Art from './components/Art';
import screamPic from './imgs/scream.jpg'
import monaLisaPic from './imgs/monaLisa.jpg'
import watermelonPic from './imgs/watermelon.jpg'


import MiniCart from './components/MiniCart';


const exampleArt = [
  {
    name: "Scream",
    desc: "scream description",
    id: "scream",
    price: 40,
    img: screamPic
  },
  {
    name: "Mona Lisa",
    desc: "mona lisa description",
    id: "moli",
    price: 200,
    img: monaLisaPic
  },
  {
    name: "Watermelon",
    desc: "watermelon description",
    id: "wamel",
    price: 30,
    img: watermelonPic
  }
]


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  `

function App() {
  const [showMiniCart, setMiniCart] = useState(false);
  const [cart, setCart] = useState([])

  const setAddCartButton = async (item) => {
    let updatedCart
    const included = cart.some(i => i.id === item)
    console.log(included)
    if (!included) {
      updatedCart = [...cart, {id: item, amt: 1}]
    } else {
      updatedCart = [...cart]
      const itemIndex = cart.findIndex(i => i.id === item)
      console.log(itemIndex)
      // updatedCart[itemIndex].id = item;
      updatedCart[itemIndex].amt += 1;
    }
    setCart(updatedCart)
  }
  return (
    <div>
      <GlobalStyle />
      <Router>
      <Navbar showMiniCart={showMiniCart} setMiniCart={setMiniCart} cart={cart} />
      <MiniCart showMiniCart={showMiniCart} setMiniCart={setMiniCart} art={exampleArt} cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art art={exampleArt} cart={cart} setAddCartButton={setAddCartButton} />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
