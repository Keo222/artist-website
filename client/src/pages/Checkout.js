import React, { useState, useEffect } from "react";

// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Styled Components
import { PageDiv } from "../StyledElements/divs";

// Components
import CheckoutForm from "../components/CheckoutForm";
import ShoppingCart from "../components/ShoppingCart";

// Types
// import { TCartItem, TSaleArt } from "src/types/artInfoTypes";

// For Stripe
const stripePromise = loadStripe(
  "pk_test_51K9C9lG5ajwLNRwgE3wD7N3L8T8I3hXDl49wbxUYTRvbUB5rrRoXTWoXvLRwDy87V95zBsDR3d92OH92vCVVkKKJ00FY2vSMBc"
);

// type Props = {
//   art: TSaleArt[];
//   cart: TCartItem[];
//   setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
//   updateCartQty: (newId: string, newQty: number) => void;
// };

function Checkout({ art, cart, setCart, updateCartQty }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  });
  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };
  console.log(process.env.REACT_APP_STRIPE_CLIENT_SECRET);

  return (
    <PageDiv>
      <ShoppingCart
        art={art}
        cart={cart}
        setCart={setCart}
        updateCartQty={updateCartQty}
      />
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </PageDiv>
  );
}

export default Checkout;
