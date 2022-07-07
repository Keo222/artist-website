import React from "react";

// Styled Components
import { PageDiv } from "../StyledElements/divs";

// Components
import ShoppingCart from "../components/ShoppingCart";

// Types
import { TSaleArt, TCartItem } from "src/types/artInfoTypes";

type Props = {
  art: TSaleArt[];
  cart: TCartItem[];
  setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  updateCartQty: (newId: string, newQty: number) => void;
};

function Checkout({ art, cart, setCart, updateCartQty }: Props) {
  return (
    <PageDiv>
      <ShoppingCart
        art={art}
        cart={cart}
        setCart={setCart}
        updateCartQty={updateCartQty}
      />
    </PageDiv>
  );
}

export default Checkout;
