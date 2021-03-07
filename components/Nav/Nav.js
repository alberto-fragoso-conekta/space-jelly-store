import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../hooks/useCart'
import styles from './Nav.module.css'

const Nav = () => {
  const { subTotal } = useCart()

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <p className={styles.navTitle}>✨🛸  Space Jelly Shop</p>
      </Link>
      <Link href='/cart'>
        <p className={styles.navCart}>
          🛒 ${subTotal}
        </p>
      </Link>
    </nav>
  )
}

export default Nav