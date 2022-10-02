import InputText from "../../../common/components/InputText/InputText";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import styles from "../../CreateShopPage/BuildShop/BuildShop.module.scss";
import styles2 from "./SignIn.module.scss";
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import toast, { toastConfig } from "react-simple-toasts";
import Loader from "../../../common/components/Loader/Loader";

function SignInMod() {
  const initialValues = {
    email: "",
    password: "",
  };
  const router = useRouter();

  toastConfig({
    time: 6000,
  });

  const [signinBtnState, setSigninBtnState] = useState(false);

  return (
    <div className={styles.buildShop}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.mainHeading}>
            <p className={styles.heading}>Welcome Back</p>
            <p className={styles.info}>
              We are always happy to have you back on Edekee!
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSigninBtnState(true);
              const params = {
                email: values.email,
                password: values.password,
              };
              axios
                .post("https://edekee-backend.herokuapp.com/v1/api/auth/login", params)
                // .post("http://app.edekee.io:3000/v1/api/auth/login", params)
                .then((response) => {
                  if (response.data.success) {
                    localStorage.clear();
                    toast("logged in successfully");
                    localStorage.setItem("token", response.data.token);

                    localStorage.setItem("userId", response.data.user.id);
                    localStorage.setItem("email", response.data.user.email);
                    localStorage.setItem("phone", response.data.user.phone);
                    localStorage.setItem(
                      "username",
                      response.data.user.username
                    );
                    if (response.data.shop_meta.id) {
                      localStorage.setItem(
                        "shopId",
                        response.data.shop_meta.id
                      );

                      localStorage.setItem(
                        "categoryId",
                        response.data.shop_meta.categoryId
                      );
                      localStorage.setItem(
                        "shopImage",
                        response.data.shop_meta.logo
                      );
                      localStorage.setItem(
                        "shopName",
                        response.data.shop_meta.shopName
                      );

                      router.push("/createShop");
                      setSigninBtnState(false);
                    } else {
                      router.push("/createShop");
                      setSigninBtnState(false);
                    }
                  } else {
                    toast(response.data.message);
                    setSigninBtnState(false);
                  }
                })
                .catch(() => {
                  setSigninBtnState(false);
                });

              setSubmitting(true);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("We need it to reach you"),

              password: Yup.string().required("Password is Required"),
            })}
          >
            {(props) => {
              const {
                values,

                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className={styles.item}>
                    <Field
                      theme="light"
                      label="Email"
                      id="34743bdw"
                      name="email"
                      type="email"
                      component={InputText}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className={` ${styles.item}`}>
                    <Field
                      theme="light"
                      label="Password"
                      id="3473bdw"
                      name="password"
                      type="password"
                      component={InputText}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div
                    className={styles2.switchToSignIn}
                    onClick={() => {
                      router.push("/signup");
                    }}
                  >
                    <p>
                      Or <span className={styles2.purpleText}>signup</span> if
                      you do not have an account.
                    </p>
                  </div>
                  {signinBtnState && <Loader />}
                  <div className={styles.buttonSection}>
                    <ShopButton
                      size="large"
                      label={signinBtnState ? "Signing in" : "Sign In"}
                      btnState={signinBtnState}
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

export default SignInMod;
