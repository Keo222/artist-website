import React from "react";

// Types
import type { TCartItem, TSaleArt } from "src/types/artInfoTypes";

// Components
import Navbar from "../Navbar";
import MiniCart from "../MiniCart";

type Props = {
  showMiniCart: boolean;
  setShowMiniCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: TCartItem[] | [];
  saleArt: TSaleArt[];
  setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  updateCartQty: (newId: string, newQty: number) => void;
  children: JSX.Element;
};

const PageLayout = ({
  showMiniCart,
  setShowMiniCart,
  cart,
  setCart,
  updateCartQty,
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
          updateCartQty={updateCartQty}
        />
      )}
      {children}
    </>
  );
};

export default PageLayout;
