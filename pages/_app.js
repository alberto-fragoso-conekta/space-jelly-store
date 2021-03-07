import { CartContext, useCartState } from '../hooks/useCart'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const CART = useCartState()

  return (
    <CartContext.Provider value={CART}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </CartContext.Provider>
  )
}

export default MyApp
