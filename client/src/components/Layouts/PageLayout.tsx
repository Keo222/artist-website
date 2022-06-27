import React from "react";

// Types
import type { TCartItem, TSaleArt } from "types/artInfoTypes";

// Components
import Navbar from "../Navbar";
import MiniCart from "../MiniCart";
import Footer from "../Footer";

type Props = {
  showMiniCart: boolean;
  setShowMiniCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: TCartItem[] | [];
  saleArt: TSaleArt[];
  setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  setCartSelect: (newId: string, newQty: number) => void;
  children: JSX.Element;
};

const PageLayout = ({
  showMiniCart,
  setShowMiniCart,
  cart,
  setCart,
  setCartSelect,
  saleArt,
  children,
}: Props) => {
  return (
    <>
      <Navbar
        setMiniCart={showMiniCart}
        setShowMiniCart={setShowMiniCart}
        cart={cart}
      />
      {showMiniCart && (
        <MiniCart
          showMiniCart={showMiniCart}
          setShowMiniCart={setShowMiniCart}
          art={saleArt}
          cart={cart}
          setCart={setCart}
          setCartSelect={setCartSelect}
        />
      )}
      {children}
    </>
  );
};

export default PageLayout;
