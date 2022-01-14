import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Art from "./pages/Art";

// Components
import Navbar from "./components/Navbar";
import MiniCart from "./components/MiniCart";
import Footer from "./components/Footer";

// Sale Images
import screamPic from "./imgs/scream.jpg";
import monaLisaPic from "./imgs/monaLisa.jpg";
import watermelonPic from "./imgs/watermelon.jpg";
import frog from "./imgs/frog.jpg";
import paint from "./imgs/paint.jpg";
import paintbrushes from "./imgs/paintbrushes.jpg";

// Styles
import { theme } from "./StyledElements/themes";
import { ScrollToggleDiv } from "./StyledElements/divs";

const exampleArt = [
  {
    name: "Scream",
    desc: "scream description",
    id: "scream",
    price: 40,
    img: screamPic,
  },
  {
    name: "Mona Lisa",
    desc: "mona lisa description",
    id: "moli",
    price: 200,
    img: monaLisaPic,
  },
  {
    name: "Watermelon",
    desc: "watermelon description",
    id: "wamel",
    price: 30,
    img: watermelonPic,
  },
  {
    name: "Frog",
    desc: "frog description",
    id: "frog",
    price: 70,
    img: frog,
  },
  {
    name: "Paint Brushes",
    desc: "Paint Brushes description",
    id: "pbrush",
    price: 20,
    img: paintbrushes,
  },
  {
    name: "Paint",
    desc: "paint description",
    id: "paint",
    price: 60,
    img: paint,
  },
];

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  `;

function App() {
  const [showMiniCart, setMiniCart] = useState(false);
  const [cart, setCart] = useState([]);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = () => setShowDropdown(!showDropdown);

  const setAddCartButton = (item) => {
    let updatedCart;
    const included = cart.some((i) => i.id === item);
    if (!included) {
      updatedCart = [...cart, { id: item, amt: 1 }];
    } else {
      updatedCart = [...cart];
      const itemIndex = cart.findIndex((i) => i.id === item);
      updatedCart[itemIndex].amt += 1;
    }
    setCart(updatedCart);
  };

  const setCartSelect = (newId, newAmt) => {
    const updatedCart = [...cart];
    const itemIndex = cart.findIndex((i) => i.id === newId);
    if (itemIndex === -1) {
      console.log("Did not find cart item");
    } else {
      updatedCart[itemIndex].amt = newAmt;
      setCart(updatedCart);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollToggleDiv showMiniCart={showMiniCart}>
        <Router>
          <Navbar
            showMiniCart={showMiniCart}
            setMiniCart={setMiniCart}
            cart={cart}
            dropdown={dropdown}
            showDropdown={showDropdown}
          />
          <MiniCart
            showMiniCart={showMiniCart}
            setMiniCart={setMiniCart}
            art={exampleArt}
            cart={cart}
            setCart={setCart}
            setCartSelect={setCartSelect}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/art"
              element={
                <Art
                  art={exampleArt}
                  cart={cart}
                  setAddCartButton={setAddCartButton}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  art={exampleArt}
                  cart={cart}
                  setCartSelect={setCartSelect}
                />
              }
            />
          </Routes>
        </Router>
        <Footer />
      </ScrollToggleDiv>
    </ThemeProvider>
  );
}

export default App;
