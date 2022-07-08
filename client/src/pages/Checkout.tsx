import React, { useState, useEffect } from "react";

// Styled Components
import { PageDiv } from "../StyledElements/divs";

// Components
import ShoppingCart from "../components/ShoppingCart";
import CheckoutForm from "../components/CheckoutForm";

// Types
import { TSaleArt, TCartItem } from "src/types/artInfoTypes";

// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51K9C9lG5ajwLNRwgE3wD7N3L8T8I3hXDl49wbxUYTRvbUB5rrRoXTWoXvLRwDy87V95zBsDR3d92OH92vCVVkKKJ00FY2vSMBc"
);

type Props = {
  art: TSaleArt[];
  cart: TCartItem[];
  setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  updateCartQty: (newId: string, newQty: number) => void;
};

function Checkout({ art, cart, setCart, updateCartQty }: Props) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log("get new stripe payment intent");
    // Create PaymentIntent as soon as the page loads
    if (cart !== []) {
      fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [cart]);

  const options = {
    clientSecret: clientSecret,
  };
  return (
    <PageDiv>
      <ShoppingCart
        art={art}
        cart={cart}
        setCart={setCart}
        updateCartQty={updateCartQty}
      />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </PageDiv>
  );
}

export default Checkout;
