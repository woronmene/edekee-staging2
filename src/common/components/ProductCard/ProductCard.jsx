import styles from "./ProductCard.module.scss";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context/AppContext";

function ProductCard({ type, option, sub }) {
  const router = useRouter();

  const { setSubcategoryId } = useAppContext();

  const handleClick = () => {
    if (type === "shop") {
      setSubcategoryId(sub.id);
      router.push("./productPage");
    }
  };

  return (
    <div
      className={styles.productCard}
      onClick={() => {
        handleClick();
      }}
    >
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${
            type === "shop" ? sub.image : sub.productPicture[0].picture
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {type === "product" && (
          <div
            className={`${styles.badge} ${
              sub.rent === "GIFT"
                ? styles.gift
                : sub.rent === "RENT"
                ? styles.rent
                : styles.buy
            }`}
            // style={{
            //   backgroundColor: `${
            //     option === "Gift"
            //       ? styles.gift
            //       : option === "Rent"
            //       ? styles.rent
            //       : styles.buy
            //   }`,
            // }}
          >
            {sub.rent.toLowerCase()}
          </div>
        )}
      </div>
      {/* #32A071 */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <p>{sub.name}</p>
          {type === "product" && <p>{sub.price}</p>}
        </div>

        <div className={styles.footerRight}>
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 5.5L1.5 0.5L0 1.5L3.5 5.5L0 9.5L1.5 10.5L6 5.5Z"
              fill="#212121"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
