const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");("sk_test_51JjNo5SBaBlcwvHXN5HexhWP20IYG9O3JeJVPAA3LxrDLUL6hvZ205fDwLobrgJTjjeHi6vh1o5rbaye378Lc7iI00f33xNxvY")

// API

// -API Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, respose) => respose.status(200).send("hello world"))             

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    
    console.log("Payment request received boom!!! for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "Rs",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app)

