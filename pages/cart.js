import Head from 'next/head'
import products from '../products.json'
import Table from '../components/Table'
import styles from '../styles/Cart.module.css'
import { CART_TABLE_COLUMNS } from '../lib/constans'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../hooks/useCart'

const Cart = () => {
  const { cartItemsTableData, handleInitiateCheckout } = useCart()

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
        </h1>

        <Table className={styles.table} columns={CART_TABLE_COLUMNS} data={cartItemsTableData} />

        <p className={styles.checkout}>
          <button className={styles.button} onClick={handleInitiateCheckout}>
            Check out
          </button>
        </p>
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

export default Cart