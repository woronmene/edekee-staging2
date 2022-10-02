/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import InputText from "../../../common/components/InputText/InputText";
import InputSelect from "../../../common/components/InputSelect/InputSelect";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import toast, { toastConfig } from "react-simple-toasts";

import styles from "./BuildShop.module.scss";
import InputCheckbox from "../../../common/components/InputCheckbox/InputCheckbox";
import ShopButton from "../../../common/components/ShopButton/ShopButton";

import {
  statesOptions,
  citiesOptions,
  internationalDeliveryOptions,
  localDeliveryOptions,
} from "../../../common/constants/options";
import Loader from "../../../common/components/Loader/Loader";

function BuildShop({
  logoFile,
  setLogoFile,
  categoryArray,
  setShopCategory,
  shopCategory,
  city,
  stateOfOrigin,
  setCity,
  setStateOfOrigin,
  setLocalDelivery,
  setInternationalDelivery,
  internationalDelivery,
  localDelivery,
  setDeliveryStatus,
  deliveryStatus,
}) {
  const router = useRouter();
  const initialValues = {
    shopName: "",
    phone: "",
    businessEmail: "",
    address: "",
  };

  const [shopCurrentlyChecked, setShopCurrentlyChecked] = useState("");
  const [createShopBtnState, setCreateShopBtnState] = useState(false);
  const inputRef = useRef();

  toastConfig({
    time: 6000,
  });

  const selectDeliveryOption = (deliveryOption) => {
    setShopCurrentlyChecked(deliveryOption);
    setDeliveryStatus(deliveryOption);
  };

  const handleChoose = () => {
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    setLogoFile(event.target.files[0]);
  };

  const shopDeliveryData = [
    {
      id: 0,
      text: "I only sell and deliver within the country.",
    },
    {
      id: 1,
      text: "I only sell and deliver outside the country.",
    },
    {
      id: 2,
      text: "I sell and deliver both within and outside the country.",
    },
  ];

  return (
    <div className={styles.buildShop}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.mainHeading}>
            <p className={styles.heading}>Build your shop</p>
            <p className={styles.info}>
              Create your shop and recieve orders from videos and movies across
              the web.
            </p>
          </div>

          <div
            className={styles.logoSection}
            onClick={() => {
              handleChoose();
            }}
          >
            <input
              ref={inputRef}
              className={styles.selectInput}
              accept=".jpg, .jpeg, .png, .svg"
              type="file"
              onChange={(e) => {
                handleFileChange(e);
              }}
            />

            {logoFile ? (
              <div
                className={styles.logoImage}
                style={{
                  backgroundImage: `url(${URL.createObjectURL(logoFile)})`,
                }}
              ></div>
            ) : (
              <>
                <p className={styles.uploadText}>
                  Upload Logo (
                  <span className={styles.optionalText}>Optional</span>)
                </p>
                <svg
                  width="88"
                  height="82"
                  viewBox="0 0 88 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="80"
                    height="80"
                    rx="40"
                    fill="white"
                    stroke="#212121"
                    strokeOpacity="0.6"
                    strokeWidth="0.930556"
                    strokeDasharray="3.1 3.1"
                  />
                  <rect
                    x="62.2002"
                    y="55.3999"
                    width="25.8"
                    height="25.8"
                    rx="12.9"
                    fill="#A271FF"
                  />
                  <path
                    d="M75.5015 63.7847V73.4597M80.2609 68.5388H70.5859"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="1.6125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setCreateShopBtnState(true);

              if (shopCategory === "") {
                toast("select shop category");
                setCreateShopBtnState(false);
                return;
              }
              if (stateOfOrigin === "") {
                toast("select state");
                setCreateShopBtnState(false);

                return;
              }
              if (city === "") {
                toast("select city");
                setCreateShopBtnState(false);

                return;
              }
              if (localDelivery === "") {
                toast("select local delivery option");
                setCreateShopBtnState(false);

                return;
              }
              if (internationalDelivery === "") {
                toast("select international delivery option");
                setCreateShopBtnState(false);

                return;
              }
              if (deliveryStatus === "") {
                toast("select delivery option");
                setCreateShopBtnState(false);

                return;
              }

              const formData = new FormData();
              formData.append("company_name", values.shopName);

              formData.append("phone", values.phone);
              formData.append("email", values.businessEmail);
              formData.append("address", values.address);
              formData.append("city_id", `1`);
              formData.append("state_id", `1`);
              formData.append("logistics", "Gokada");
              formData.append("delivery_status", deliveryStatus);
              formData.append("category_id", shopCategory);
              formData.append("logo", logoFile);

              const shopToastInterval = setInterval(() => {
                toast("Creating shop...");
              }, 6000);
              axios
                .post("https://edekee-backend.herokuapp.com/v1/api/shop", formData, {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                    portal: "web",
                  },
                })
                .then((res) => {
                  if (res.data.success) {
                    clearInterval(shopToastInterval);
                    toast("Shop created successfully");
                    setCreateShopBtnState(false);
                    router.push("/createProduct");
                    localStorage.setItem("shopId", res.data.data.id);
                    localStorage.setItem("categoryId", shopCategory);
                    localStorage.setItem("shopImage", res.data.data.logo);
                    localStorage.setItem(
                      "shopName",
                      res.data.data.company_name
                    );
                  }
                })
                .catch((err) => {
                  console.error(err);
                  setCreateShopBtnState(false);
                  clearInterval(shopToastInterval);
                  toast("an error occurred, try again");
                });

              setSubmitting(true);
            }}
            validationSchema={Yup.object().shape({
              shopName: Yup.string()
                .matches(/^[a-zA-Z0-9_.]+$/, "Invalid shop name")
                .required("What would you like to name your shop"),
              phone: Yup.string()
                .matches(
                  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,

                  "Phone number is not valid"
                )
                .min(10, "Phone number is not valid")
                .max(13, "Phone number is not valid")
                .required("We need it to reach you "),
              businessEmail: Yup.string()
                .email()
                .required("We need it to identify you"),
              address: Yup.string().required("This is required"),
            })}
          >
            {(props) => {
              const { values, handleChange, handleBlur, handleSubmit } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className={`${styles.item}`}>
                    <Field
                      theme="light"
                      label="Shop Name"
                      id="347843bdw"
                      name="shopName"
                      type="text"
                      component={InputText}
                      value={values.shopName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className={` ${styles.item}`}>
                    <InputSelect
                      label="Shop Category"
                      options={categoryArray}
                      handleSelect={setShopCategory}
                    />
                  </div>
                  <div className={styles.item}>
                    <Field
                      theme="light"
                      label="Phone Number"
                      id="347843bdw"
                      name="phone"
                      type="number"
                      component={InputText}
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className={styles.item}>
                    <Field
                      theme="light"
                      label="Business Email"
                      id="34743bdw"
                      name="businessEmail"
                      type="email"
                      component={InputText}
                      value={values.businessEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className={` ${styles.item}`}>
                    <Field
                      theme="light"
                      label="Street Address"
                      id="3473bdw"
                      name="address"
                      type="text"
                      component={InputText}
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className={styles.stateSection}>
                    <div className={` ${styles.item}`}>
                      <InputSelect
                        label="State"
                        options={statesOptions}
                        handleSelect={setStateOfOrigin}
                      />
                    </div>

                    <div className={` ${styles.item}`}>
                      <InputSelect
                        label="City"
                        options={citiesOptions}
                        handleSelect={setCity}
                      />
                    </div>
                  </div>

                  <p className={styles.deliverText}>
                    Who will deliver your products{" "}
                    <span className={styles.questionmark}>?</span>
                  </p>

                  <div className={` ${styles.item}`}>
                    <InputSelect
                      label="Local Delivery Partner"
                      options={localDeliveryOptions}
                      handleSelect={setLocalDelivery}
                    />
                  </div>
                  <div className={` ${styles.item}`}>
                    <InputSelect
                      label="International Shipping Partner"
                      options={internationalDeliveryOptions}
                      handleSelect={setInternationalDelivery}
                    />
                  </div>

                  <div className={styles.deliveryInfoBody}>
                    {shopDeliveryData.map((option) => {
                      let isChecked;
                      if (shopCurrentlyChecked === option.text) {
                        isChecked = true;
                      } else {
                        isChecked = false;
                      }
                      return (
                        <div
                          key={option.id}
                          className={styles.deliveryOption}
                          onClick={() => {
                            selectDeliveryOption(option.text);
                          }}
                          role="button"
                          tabIndex="-1"
                        >
                          <div>
                            <InputCheckbox type="circle" checked={isChecked} />
                          </div>

                          <p>{option.text}</p>
                        </div>
                      );
                    })}
                  </div>
                  {createShopBtnState && <Loader />}
                  <div className={styles.buttonSection}>
                    <ShopButton
                      size="large"
                      label={createShopBtnState ? "Creating..." : "Next"}
                      btnState={createShopBtnState}
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

export default BuildShop;
