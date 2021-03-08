import styles from './Table.module.css'
import { useCart } from '../../hooks/useCart'

const Quantity = ({ id, quantity }) => {
  const { removeItem, updateItem } = useCart()

  const handleQuantityChange = ({ target: { value } }) => {
    const QUANTITY_VALUE = Number(value)
    QUANTITY_VALUE === 0 ? removeItem(id) : updateItem(id, QUANTITY_VALUE)
  }

  return <input className={styles.input} min={0} onChange={handleQuantityChange} type='number' defaultValue={quantity} />
}

export default Quantity