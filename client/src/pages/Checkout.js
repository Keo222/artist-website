import React from "react";

// Styled Components
import { PageDiv } from "../StyledElements/divs";

// Components
import ShoppingCart from "../components/ShoppingCart";

function Checkout({ art, cart, setCart, updateCartQty }) {
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
