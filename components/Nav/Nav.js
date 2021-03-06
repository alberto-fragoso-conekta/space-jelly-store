import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../hooks/useCart'
import styles from './Nav.module.css'

const Nav = () => {
  const { handleInitiateCheckout, subTotal } = useCart()

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <p className={styles.navTitle}>✨🛸  Space Jelly Shop</p>
      </Link>
      <p className={styles.navCart}>
        <button onClick={handleInitiateCheckout}>
          <FaShoppingCart />
          ${subTotal}
        </button>
      </p>
    </nav>
  )
}

export default Nav