import Button from '../components/Button'
import Head from 'next/head'
import Link from 'next/link'
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

        {cartItemsTableData.length 
          ? <p className={styles.checkout}>
              <Button onClick={handleInitiateCheckout}>Check out</Button>
            </p>
          : <EmptyCart />
        }
      </main>
    </div>
  )
}

export default Cart

const EmptyCart = () => <p className={styles.empty}>👾 No items in your cart. <Link href='/'>Go add something!</Link></p>