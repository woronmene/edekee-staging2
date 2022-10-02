;
import styles from "./ShopButton.module.scss";

function ShopButton({ size, label, buttonType, handleClick, btnState }) {
  return (
    <button
      type={buttonType}
      disabled={btnState}
      className={`${styles.shopButton} ${
        size === "large" ? styles.large : styles.small
      } ${btnState && styles.disabled}`}
      onClick={() => {
        handleClick();
      }}
    >
      {label}
    </button>
  );
}

export default ShopButton;
