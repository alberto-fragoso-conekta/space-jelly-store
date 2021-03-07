import styles from './Button.module.css'

const Button = ({ children, onClick }) => (
  <button className={styles.button} {...{ onClick} }>{children}</button>
)

export default Button