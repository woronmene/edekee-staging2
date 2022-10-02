/* eslint-disable react/prop-types */
import { useRouter } from "next/router";

import ProductCard from "../../common/components/ProductCard/ProductCard";
import styles from "../ShopPage/ShopPage.module.scss";

function ShopProducts({ subcategories, type }) {
  const shopName = localStorage.getItem("shopName");
  const shopImage = localStorage.getItem("shopImage");
  const router = useRouter();

  return (
    <div className={styles.shopPage}>
      <div className={styles.wrapper}>
        <div className={styles.profileTop}>
          <div
            className={styles.profilePic}
            style={{
              backgroundImage: `url(${shopImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <p className={styles.profileName}>{shopName}</p>
        </div>

        <div className={styles.createProductSection}>
          <p
            className={styles.createProductText}
            onClick={() => {
              router.push("/createProduct");
            }}
          >
            Create Product
          </p>
        </div>

        <div className={styles.gridSection}>
          {subcategories.length !== 0 ? (
            subcategories.map((sub) => (
              <ProductCard type={type} option="Gift" key={sub.id} sub={sub} />
            ))
          ) : (
            <p>No products yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopProducts;
