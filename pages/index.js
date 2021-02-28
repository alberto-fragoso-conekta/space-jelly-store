import Head from 'next/head'
import products from '../products.json'
import styles from '../styles/Home.module.css'
import { initiateCheckout } from '../lib/payments'
import { INITIAL_CART_STATE } from '../lib/constans'
import { useState } from 'react'

export default function Home() {
  const [cart, updateCart] = useState(INITIAL_CART_STATE)

  const handleInitiateCheckout = () => {
    initiateCheckout(cartItems.map(({ id, quantity }) => ({ price: id, quantity })))
  }

  const addToCart = id => {
    updateCart(prev => {
      const CART_STATE = { ...prev }

      if(CART_STATE.products[id]) {
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

  const subTotal = cartItems.reduce((acc, { pricePerItem, quantity }) => acc += pricePerItem * quantity, 0)

  const totalItems = cartItems.reduce((acc, { quantity }) => acc += quantity, 0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Space Jelly Shop
        </h1>

        <p className={styles.description}>
          The best space jellyfish swag in the universe!
        </p>

        <p className={styles.description}>
          <strong>Items:</strong> {totalItems}
          <br />
          <strong>Total cost:</strong> ${subTotal}
          <br />
          <button className={styles.button} onClick={handleInitiateCheckout}>Check out</button>
        </p>

        <ul className={styles.grid}>
          {products.map(({ description, id, image, price, title }) => (<li className={styles.card} key={id}>
            <a href="#">
              <img alt={title} src={image} />
              <h3>{title}</h3>
              <span>${price}</span>
              <p>{description}</p>
            </a>
            <p>
              <button className={styles.button} onClick={() => addToCart(id)}>Buy now!</button>
            </p>
          </li>))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
