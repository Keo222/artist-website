import React, {useState, useEffect} from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from './CheckoutForm';
import ShoppingCart from './ShoppingCart';

const stripePromise = loadStripe("pk_test_51K9C9lG5ajwLNRwgE3wD7N3L8T8I3hXDl49wbxUYTRvbUB5rrRoXTWoXvLRwDy87V95zBsDR3d92OH92vCVVkKKJ00FY2vSMBc");

function Checkout() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <ShoppingCart />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Checkout
