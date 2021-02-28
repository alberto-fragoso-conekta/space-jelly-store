import { CartContext, useCartState } from '../hooks/useCart'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const CART = useCartState()

  return (
    <CartContext.Provider value={CART}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp
