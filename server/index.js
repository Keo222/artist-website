const _dotenv = require("dotenv").config(); //not sure if const is necessary
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// For SQL Database
const pool = require("./db");

// Bring in Stripe
const stripe = require("stripe")(process.env.SECRET_KEY);

// Define PORT number
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../client/build")));

// STRIPE

// Temporary item & cost dictionary
const itemCosts = {
  scream: 4000,
  moli: 20000,
  wamel: 3000,
  frog: 7000,
  pbrush: 2000,
  paint: 6000,
};

// Calculate item costs using item id. All costs are in number of cents.
const calculateOrderAmount = (items) => {
  let total;
  if (items.every((item) => Object.keys(itemCosts).includes(item.id))) {
    try {
      total = items.reduce(
        (sum, item) => sum + itemCosts[item.id] * item.qty,
        0
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  } else {
    console.error("Cart includes invalid item.");
    return null;
  }
  return total;
};

// Stripe API call to create payment intent. Sends total cost of items to Stripe with account info.
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  if (
    typeof calculateOrderAmount(items) === "number" &&
    calculateOrderAmount(items) > 0
  ) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      // amount: 1800,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }
});

// PRACTICE GET REQUEST
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!!" });
});

// Get webpage
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
