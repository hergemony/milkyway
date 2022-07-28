// const express = require('express');

// const stripe = require("stripe")("...");
// const { v4: uuidv4 } = require('uuid');

// const router = express.Router();

// router.get('/', (req, res, next) => {
    console.log("GET Response from Researcher");
    res.json({
        message: 'It Works'
    });
// });

import React from 'react';

import axios from 'axios';
import Stripe from "react-stripe-checkout";

const App = () => {

  handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/api/stripe/pay", {
        token: token.id,
        amount: totalAmount
      });
    } catch (error) {
      console.log(error);
    };
  }
}

const tokenHandler = (token) => {
  handleToken(100, token);

}

function App() {
return (
  <div>
    <Stripe
    stripeKey=""
    token={tokenHandler}
    />
  </div>
);
