import { loadStripe } from '@stripe/stripe-js'

const STRIPE_PROMISE = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)

export const initiateCheckout = async (lineItems = []) => {
  const STRIPE = await STRIPE_PROMISE

  await STRIPE.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin
  })
}