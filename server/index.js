const dotenv = require("dotenv").config(); //not sure if const is necessary
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");

const PORT = process.env.PORT || 3001;

const stripe = require("stripe")(process.env.SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
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
