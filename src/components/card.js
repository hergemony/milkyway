import { StyledCard } from './styles/Card.styled'
import { Button } from './styles/Button.styled'
import React, { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import Stripe from './Stripe';

export default function Card({ item: { id, title, body, image } }) {
  const [showModal, setShowModal] = useState(false)
  const stripePromise = loadStripe('YOUR_API_KEY');
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt='duckonthgrass.jpg' />

        </div>

        <div>
        {showModal === true 
        ? 
        <div>
                  <Elements stripe={stripePromise}>
    <Stripe />
  </Elements>
          </div>
          :
          <Button bg='#ff0099' color='#fff' onClick={() => setShowModal(prev => (!prev))}>
          Buy it Now
        </Button>
        }

      </div>
    </StyledCard>
  )
}