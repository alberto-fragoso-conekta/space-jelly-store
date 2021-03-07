import styles from './Table.module.css'
import { useCart } from '../../hooks/useCart'

const Quantity = ({ id, quantity }) => {
  const { updateItem } = useCart()

  const handleQuantityChange = ({ target }) => {
    const { value: QUANTITY_VALUE } = target
    updateItem(id, Number(QUANTITY_VALUE))
  }

  return (
    <input className={styles.input} min={0} onChange={handleQuantityChange} type='number' defaultValue={quantity} />
  )
}

export default Quantity