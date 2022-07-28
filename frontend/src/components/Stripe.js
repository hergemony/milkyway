import { StyledStripe } from './styles/Stripe.styled'
import { Button } from './styles/Button.styled'
import React from 'react';

import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';



export default function Stripe() {
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };
  return (
    <StyledStripe>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        CLICK TO PAY
      </button>
    </form>
    </StyledStripe>
  )
}