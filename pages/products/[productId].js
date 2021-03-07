import Head from 'next/head'
import products from '../../products.json'
import styles from '../../styles/Product.module.css'
import { useCart } from '../../hooks/useCart'

const Product = ({ product: { description, id, image, price, title } }) => 
{
  const { addToCart } = useCart()

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title } -  Space Jelly</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
  
      <main className={styles.main}>
        <div className={styles.productImage}>
          <img alt={title} src={image} />
        </div>
  
        <div>
          <h1>{ title }</h1>
          <p className={styles.description}>{ description }</p>
          <p className={styles.description}>${ price.toFixed(2) }</p>
          <p><button className={styles.button} onClick={() => addToCart(id)}>Buy</button></p>
        </div>
      </main>
    </div>
  )

}

export default Product

export const getStaticProps = async ({ params: { productId} }) => ({ props: { product: products.find(({ id }) => id === productId) } })

export const getStaticPaths = async () => ({ fallback: false, paths: products.map(({ id }) => ({ params: { productId: id } })) })