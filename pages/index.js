import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import { useCart } from '../hooks/useCart'

export default function Home() {
  const { addToCart } = useCart()

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The best space jellyfish swag in the universe! 
        </h1>

        <ul className={styles.grid}>
          {products.map(({ description, id, image, price, title }) => 
          (
            <li className={styles.card} key={id}>
              <Link href={`/products/${id}`}>
                <a>
                  <img alt={title} src={image} />
                  <h3>{title}</h3>
                  <span>${price}</span>
                  <p>{description}</p>
                </a>
              </Link>
              <p>
                <button className={styles.button} onClick={() => addToCart(id)}>Buy now!</button>
              </p>
            </li>
          )
        )}
        </ul>
      </main>
    </div>
  )
}
