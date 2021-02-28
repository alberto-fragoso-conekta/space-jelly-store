import products from '../products.json'
import { initiateCheckout } from '../lib/payments'
import { INITIAL_CART_STATE } from '../lib/constans'
import { useState } from 'react'

export const useCart = () => {
  const [cart, setCart] = useState(INITIAL_CART_STATE)

  const addToCart = id => {
    updateCart(prev => {
      const CART_STATE = { ...prev }

      if (CART_STATE.products[id]) {
        CART_STATE.products[id].quantity = CART_STATE.products[id].quantity + 1
      } else {
        CART_STATE.products[id] = { id, quantity: 1 }
      }

      return CART_STATE
    })
  }

  const cartItems = Object.keys(cart.products).map(key => {
    const { price: PRODUCT_PRICE } = products.find(({ id }) => `${id}` === `${key}`)

    return {
      ...cart.products[key],
      pricePerItem: PRODUCT_PRICE
    }
  })

  const handleInitiateCheckout = () => {
    initiateCheckout(cartItems.map(({ id, quantity }) => ({ price: id, quantity })))
  }

  const updateCart = value => {
    setCart(value)
  }

  const subTotal = cartItems.reduce((acc, { pricePerItem, quantity }) => acc += pricePerItem * quantity, 0)

  const totalItems = cartItems.reduce((acc, { quantity }) => acc += quantity, 0)

  return {
    addToCart,
    cartItems,
    handleInitiateCheckout,
    subTotal,
    totalItems,
  }
}