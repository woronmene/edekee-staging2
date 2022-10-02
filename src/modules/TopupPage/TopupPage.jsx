/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import  { useState } from "react";
import styles from "./TopupPage.module.scss";
import {  Formik } from "formik";
import { useRouter } from "next/router";
import { PaystackButton } from "react-paystack"


import * as Yup from "yup";
import ShopButton from "../../common/components/ShopButton/ShopButton";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";

function TopupPage() {
  const [flutterPrice, setFlutterPrice] = useState(0);
  const [priceValue, setPriceValue] = useState("");
  const router = useRouter();
  const token = localStorage.getItem("token");

  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const username = localStorage.getItem("username");

  const handleInputChange = (e) => {
    setPriceValue(e.target.value);
  };

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: priceValue,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: phone,
      name: username,
    },
    customizations: {
      title: "Create shop",
      description: "Payment for shop creation",
      logo: "https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/edekeeLogoPurple.svg?alt=media&token=f3283d4a-4149-4efd-a4c1-1417c1388500s",
    },
  };

  const componentProps ={
    email,
    amount: priceValue,
    // metadata: {
      name: username,
      phone,
    // },
    publicKey: process.env.NEXT_PUBLIC_PS_PUBLIC_KEY,
    text: "Fund Wallet",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () =>{},
  }

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        if (response.status === "successful") {
          const params = {
            balance: response.amount,
          };
          axios
            .post(`https://edekee-backend.herokuapp.com/v1/api/wallet/save`, params, {
              headers: {
                Authorization: token,
                portal: "web",
              },
            })
            .then((res) => {
              if (res.data.success) {
                router.push("/createShop");
              }
              setWalletBalance(res.data.data.balance);
            })
            // .catch((err) => {

            // });
        }

        closePaymentModal();
      },
      onClose: () => {},
    });
  };

  const handleFlutterPrice = (value) => {
    setFlutterPrice(value);
    console.log(flutterPrice)

    handlePayment();
  };

  const initialValues = {
    price: "",
  };
  return (
    <div className={styles.topupPage}>
      <div className={styles.wrapper}>
        <div className={styles.mainHeading}>
          <p className={styles.heading}>Wallet Top-up</p>
          <p className={styles.info}>
            Funds added to you wallet, can be used for shop and product
            subscriptions.
          </p>
          <p className={styles.info}>{process.env.FLW_PUBLIC_KEY}</p>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            // setCreateShopBtnState(true);

            setSubmitting(true);
          }}
          validationSchema={Yup.object().shape({
            price: Yup.number().required(" "),
          })}
        >
          {(props) => {
            const { values, handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="" style={{ width: "100%" }}>
                  <div className={`${styles.inputText} `}>
                    <input
                      id="3473bdw"
                      // value={value}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                      // name={name}
                      type="number"
                 
                      autoComplete="off"
                      // readOnly={readonly}
                      className={`${styles.light}`}
                      // className={styles.dark}
                    />
                    <label
                      className={`${values.price ? styles.active : ""}`}
                      // htmlFor={id}
                    >
                      Enter Amount
                    </label>
                  </div>
                  {/* {touched[field.name] && errors[field.name] && (
                    <div className="error">{errors[field.name]}</div>
                  )} */}
                  {/* <p>Error Message</p> */}
                </div>

                <div className={styles.buttonSection}>
                  <ShopButton
                    size="large"
                    label="Fund Wallet"
                    // btnState={createShopBtnState}

                    handleClick={() => {
                      setFlutterPrice(values.price);

                      handleFlutterPrice(values.price);
                    }}
                  />
                <PaystackButton className={styles.paystackButton}  {...componentProps}/>
                </div>

              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default TopupPage;