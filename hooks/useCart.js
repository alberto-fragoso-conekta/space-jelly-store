import Quantity from '../components/Table/Quantity'
import products from '../products.json'
import { createContext, useContext, useEffect, useState } from 'react'
import { initiateCheckout } from '../lib/payments'
import { INITIAL_CART_STATE, SPACE_JELLY_CART_LOCAL_STORAGE_NAME } from '../lib/constans'

export const CartContext = createContext()

export const useCartState = () => {
  const [cart, setCart] = useState(INITIAL_CART_STATE)

  useEffect(() => {
    const STATE_FROM_LOCAL_STORE = window.localStorage.getItem(SPACE_JELLY_CART_LOCAL_STORAGE_NAME)
    const CART_DATA = STATE_FROM_LOCAL_STORE && JSON.parse(STATE_FROM_LOCAL_STORE)

    if (CART_DATA) {
      setCart(CART_DATA)
    }
  }, [])

  useEffect(() => {
    const CART_DATA = JSON.stringify(cart)
    window.localStorage.setItem(SPACE_JELLY_CART_LOCAL_STORAGE_NAME, CART_DATA)
  }, [cart])

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

  const updateItem = (id, quantity) => {
    updateCart(prev => {
      const CART_STATE = { ...prev }

      if (CART_STATE.products[id]) {
        CART_STATE.products[id].quantity = quantity
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

  const cartItemsTableData = cartItems.map(({ id, pricePerItem, quantity }) => {
    const { title } = products.find(({ id: PRODUCT_ID }) => PRODUCT_ID === id)

    return {
      id,
      pricePerItem,
      quantity: <Quantity {...{ id, quantity }} />,
      title,
      total: quantity * pricePerItem
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
    cartItemsTableData,
    handleInitiateCheckout,
    subTotal,
    totalItems,
    updateItem,
  }
}

export const useCart = () => {
  const CART = useContext(CartContext)
  return CART
}