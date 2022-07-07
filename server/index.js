const _dotenv = require("dotenv").config(); //not sure if const is necessary
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");

// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const { OAuth2Client } = require("google-auth-library");
// const OAuth2 = google.auth.OAuth2;

const PORT = process.env.PORT || 3001;

const stripe = require("stripe")(process.env.SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../client/build")));

// STRIPE
const itemCosts = {
  scream: 4000,
  moli: 20000,
  wamel: 3000,
  frog: 7000,
  pbrush: 2000,
  paint: 6000,
};

const calculateOrderAmount = (items) => {
  let total;
  if (items.every((item) => Object.keys(itemCosts).includes(item))) {
    try {
      total = items.reduce((sum, item) => sum + itemCosts[item], 0);
    } catch (error) {
      console.log(error);
      return;
    }
  } else {
    console.error("Cart includes invalid item.");
    return;
  }
  return total;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// PRACTICE GET REQUEST
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
