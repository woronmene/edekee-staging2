;
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import styles from "./CreateProductAction.module.scss";

function CreateProductAction({ setCurrentPage }) {
  const shopName = localStorage.getItem("shopName");
  const shopImage = localStorage.getItem("shopImage");
  return (
    <div className={styles.createProductAction}>
      <div className={styles.wrapper}>
        <div className={styles.shopImageSection}>
          <div
            className={styles.shopImage}
            style={{
              backgroundImage: `url(${shopImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className={styles.shopName}>{shopName}</div>
        </div>
        <div className={styles.mainHeading}>
          <p className={styles.heading}>Add your product.</p>
          <p className={styles.info}>
            It’s lonely here, please add any of your products here, so they can
            be available to the world!
          </p>
        </div>
        <div className={styles.buttonSection}>
          <ShopButton
            size="large"
            label="Create Product"
            handleClick={() => {
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateProductAction;
