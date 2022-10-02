;
import { useRouter } from "next/router";
import InputText from "../../../common/components/InputText/InputText";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import styles from "../../CreateShopPage/BuildShop/BuildShop.module.scss";
import styles2 from "./CreateAccount.module.scss";
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import Loader from "../../../common/components/Loader/Loader";

function CreateAccount({ setEmail, setPassword, generateOtp, signUpBtnState }) {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const router = useRouter();

  return (
    <div className={styles.buildShop}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.mainHeading}>
            <p className={styles.heading}>Create an Account</p>
            <p className={styles.info}>
              Sign up on Edekee to Buy and Sell Products and Services on Videos
              across the Web.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              setEmail(values.email);
              setPassword(values.password);

              resetForm({ values: "" });
              generateOtp(values.email);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("We need it to reach you"),

              password: Yup.string()
                .required("Password is Required")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), ""], "Password must match")
                .required("Confirm Password is Required"),
            })}
          >
            {(props) => {
              const { values, handleChange, handleBlur, handleSubmit } = props;
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
                  <div className={` ${styles.item}`}>
                    <Field
                      theme="light"
                      label="Retype Password"
                      id="3473bdw"
                      name="confirmPassword"
                      type="password"
                      component={InputText}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div
                    className={styles2.switchToSignIn}
                    onClick={() => {
                      router.push("/signin");
                    }}
                  >
                    <p>
                      Or <span className={styles2.purpleText}>signin</span> if
                      you already have an account.
                    </p>
                  </div>
                  {signUpBtnState && <Loader />}

                  <div className={styles.buttonSection}>
                    <ShopButton
                      size="large"
                      label={signUpBtnState ? "Creating Account" : "Next"}
                      btnState={signUpBtnState}
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

export default CreateAccount;
