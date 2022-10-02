/* eslint-disable react/prop-types */
import InputText from "../../../common/components/InputText/InputText";
import { Field, Formik } from "formik";
import InputCheckbox from "../../../common/components/InputCheckbox/InputCheckbox";
import * as Yup from "yup";
import styles from "../../CreateShopPage/BuildShop/BuildShop.module.scss";
import styles2 from "./ProductInfo.module.scss";
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import InputSelect from "../../../common/components/InputSelect/InputSelect";
import { currencyOptions } from "../../../common/constants/options";
import Loader from "../../../common/components/Loader/Loader";

function ProductInfo({
  categoryArray,
  setSubCategoryId,
  setProductType,
  productType,
  setCurrency,
  createProduct,
  productInfoBtnState,
}) {
  const initialValues = {
    productName: "",
    price: "",
    rentPrice: "",
    productDescription: "",
  };

  const deliveryData = [
    {
      id: 0,
      text: "I will rent this product to creators and movie producers to make content.",
      value: "Rent",
    },
    {
      id: 1,
      text: "I will gift out a copy of this product to creators and movie producers to make content.",
      value: "Gift",
    },
    {
      id: 2,
      text: "Neither",
      value: "Buy",
    },
  ];

  const selectProductType = (deliveryOption) => {
    setProductType(deliveryOption);
  };

  return (
    <div className={styles.buildShop}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.mainHeading}>
            <p className={styles.heading}>Product Info.</p>
            <p className={styles.info}>
              Give us more information about this product.{" "}
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              createProduct(
                values.productName,
                values.productDescription,
                values.price
              );
            }}
            validationSchema={Yup.object().shape({
              productName: Yup.string().required("Product name is required"),
              price: Yup.string(),
              productDescription: Yup.string().required(
                "productDescription is Required"
              ),
            })}
          >
            {(props) => {
              const { values, handleChange, handleBlur, handleSubmit } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className={styles.item}>
                    <Field
                      theme="light"
                      label="Product Name"
                      id="34743bdw"
                      name="productName"
                      type="text"
                      component={InputText}
                      value={values.productName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className={` ${styles.item}`}>
                    <InputSelect
                      label="Product Category"
                      options={categoryArray}
                      handleSelect={setSubCategoryId}
                    />
                  </div>

                  <div className={styles2.phoneNumberSection}>
                    <div className={` ${styles2.item1}`}>
                      <InputSelect
                        label="Currency"
                        options={currencyOptions}
                        handleSelect={setCurrency}
                      />
                    </div>

                    <div className={styles2.item2}>
                      <Field
                        theme="light"
                        label="Price"
                        id="34743bdw"
                        name="price"
                        type="number"
                        component={InputText}
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  {productType === "Rent" && (
                    <div className={styles2.phoneNumberSection}>
                      <div className={` ${styles2.item1}`}>
                        <InputSelect
                          label="Currency"
                          options={currencyOptions}
                          handleSelect={setCurrency}
                        />
                      </div>

                      <div className={styles2.item2}>
                        <Field
                          theme="light"
                          label="Rent Price"
                          id="34743bdw"
                          name="rentPrice"
                          type="number"
                          component={InputText}
                          value={values.rentPrice}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  )}

                  <div className={styles.deliveryInfoBody}>
                    {deliveryData.map((option) => {
                      let isChecked;
                      if (productType === option.value) {
                        isChecked = true;
                      } else {
                        isChecked = false;
                      }
                      return (
                        <div
                          key={option.id}
                          className={styles.deliveryOption}
                          onClick={() => {
                            selectProductType(option.value);
                          }}
                          role="button"
                          tabIndex="-1"
                        >
                          <div>
                            <InputCheckbox type="square" checked={isChecked} />
                          </div>

                          <p>{option.text}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className={styles.item}>
                    <Field
                      theme="light"
                      label="Product Description"
                      id="34743bdw"
                      name="productDescription"
                      type="text"
                      component={InputText}
                      value={values.productDescription}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {productInfoBtnState && <Loader />}

                  <div className={styles.buttonSection}>
                    <ShopButton
                      size="large"
                      label={
                        productInfoBtnState ? "Creating..." : "Create Product"
                      }
                      btnState={productInfoBtnState}
                      buttonType="submit"
                      handleClick={() => {}}
                    />
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
