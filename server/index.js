const dotenv = require("dotenv").config(); //not sure if const is necessary
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

// Trying out building an API ******************

// Sale Art Work

// Portfolio Art Work

// Text for Website

// For reCAPTCHA
// app.post("/recaptcha", (req, res) => {
//   const human = validateHuman(req.body.token);

//   if (!human) {
//     res.status(400);
//     res.json({ msg: "You're a bot form!" });
//   } else {
//     res.status(201);
//     res.json({ msg: "You're a human form!" });
//   }
// });

// NODEMAILER

// const createTransporter = async () => {
//   const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     "https://developers.gogle.com/oauthplayground"
//   );

//   OAuth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN,
//   });

//   const accessToken = await new Promise((resolve, reject) => {
//     oauth2Client.getAccessToken((err, token) => {
//       if (err) {
//         reject();
//       }
//       resolve(token);
//     });
//   });

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.EMAIL,
//       accessToken,
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       refreshToken: process.env.REFRESH_TOKEN,
//     },
//   });

//   return transporter;
// };

// const sendEmail = async (emailOptions) => {
//   let emailTransporter = await createTransporter();
//   await emailTransporter.sendMail(emailoptions);
// };

// app.post("/send-message", (req, res) => {
//   let emailData = {
//     to: process.env.EMAIL,
//     from: req.body.email,
//     text: req.body.text,
//   };
//   sendEmail(emailData);
//   res.json({ msg: "Email Sent!" });
// });

// RECAPTCHA

// async function validateHuman(token) {
//   const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//   const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

//   const response = await fetch(verifyURL, {
//     method: "POST",
//   });
//   const data = await response.json();

//   console.log(data, "recaptcha data");
// }

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
