import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import { initiateCheckout } from '../lib/payments'

export default function Home() {

  const handleInitiateCheckout = id => {
    const LINE_ITEM = { price: id, quantity: 1 }
    initiateCheckout([ LINE_ITEM ])
  }

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

        <ul className={styles.grid}>
          {products.map(({ description, id, image, price, title }) => (<li className={styles.card} key={id}>
            <a href="#">
              <img alt={title} src={image} />
              <h3>{title}</h3>
              <span>${price}</span>
              <p>{description}</p>
            </a>
            <p>
              <button className={styles.button} onClick={() => handleInitiateCheckout(id)}>Buy now!</button>
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
