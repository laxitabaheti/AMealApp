import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.cartIcon}>
        <CartIcon />
      </span>
      <span className={styles.cart}>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};
export default HeaderCartButton;
