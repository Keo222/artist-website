import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

// Types
import type { TCartItem } from "src/types/artInfoTypes";

// Art from DB
import { saleArt } from "./tempDB/art";

// Layout
import PageLayout from "./components/Layouts/PageLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Art from "./pages/Art";
import AdminLogin from "./pages/Admin/AdminLogin";

// Styles
import { theme } from "./StyledElements/themes";
// import { ScrollToggleDiv } from "./StyledElements/divs";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  `;

function App() {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [cart, setCart] = useState<TCartItem[]>([]);

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      const cartItems = localStorage.getItem("cart");
      setCart(cartItems ? JSON.parse(cartItems) : null);
    }
  }, []);

  const addToCart = (item: string) => {
    let updatedCart: TCartItem[];
    const included = cart.some((i: TCartItem) => i.id === item);
    if (!included) {
      updatedCart = [...cart, { id: item, qty: 1 }];
    } else {
      updatedCart = [...cart];
      const itemIndex = cart.findIndex((i: TCartItem) => i.id === item);
      updatedCart[itemIndex].qty += 1;
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateCartQty = (newId: string, newQty: number) => {
    const updatedCart = [...cart];
    const itemIndex = cart.findIndex((i) => i.id === newId);
    if (itemIndex === -1) {
      // #!#!# NEEDS BETTER ERROR HANDLING #!#!#
      console.log("Did not find cart item");
    } else {
      updatedCart[itemIndex].qty = newQty;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageLayout
          showMiniCart={showMiniCart}
          setShowMiniCart={setShowMiniCart}
          cart={cart}
          setCart={setCart}
          updateCartQty={updateCartQty}
          saleArt={saleArt}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/art"
              element={
                <Art art={saleArt} cart={cart} addToCart={addToCart} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  art={saleArt}
                  cart={cart}
                  setCart={setCart}
                  updateCartQty={updateCartQty}
                />
              }
            />
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
