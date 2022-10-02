/* eslint-disable react/prop-types */
import { useState } from "react";
import InputText from "../../../common/components/InputText/InputText";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { toastConfig } from "react-simple-toasts";

import { useRouter } from "next/router";

import styles from "../../CreateShopPage/BuildShop/BuildShop.module.scss";
import styles2 from "./AboutYourself.module.scss";
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import InputSelect from "../../../common/components/InputSelect/InputSelect";
import {
  phoneNumberOptions,
  genderOptions,
  dayOptions,
  monthOptions,
  yearOptions,
} from "../../../common/constants/options";
import Loader from "../../../common/components/Loader/Loader";

function AboutYourself({
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  gender,
  email,
  setGender,
  numberCode,
}) {
  const router = useRouter();
  const initialValues = {
    username: "",
    phone: "",
  };

  toastConfig({
    time: 6000,
  });
  const [aboutBtnState, setAboutBtnState] = useState(false);

  const handleDate = (dayValue, monthValue, yearValue) => {
    const d = new Date(yearValue, monthValue, dayValue);

    if (d === "Invalid Date") {
      setAboutBtnState(false);
      return false;
    }

    return d.toISOString();
  };

  return (
    <div className={styles.buildShop}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.mainHeading}>
            <p className={styles.heading}>Tell Us About Yourself</p>
            <p className={styles.info}>
              We would love to know just a little bit about you.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              if (gender === "") {
                toast("select gender");
                return;
              }
              if (day === "" || month === "" || year === "") {
                toast("select date");

                return;
              }

              const dob = handleDate(day, month, year);

              if (!dob) {
                toast("Invalid Date");
              }

              const params = {
                username: values.username,
              };
              setAboutBtnState(true);

              axios
                .post(
                  "https://edekee-backend.herokuapp.com/v1/api/user/username/verify",
                  params
                )
                .then((res) => {
                  if (res.data.success) {
                    const newParams = {
                      email,
                      username: values.username,
                      country: "Nigeria",
                      dob,
                      gender,
                      phone: `${numberCode}${values.phone}`,
                    };

                    axios
                      .put(
                        "https://edekee-backend.herokuapp.com/v1/api/user/update",
                        newParams
                      )
                      .then((res) => {
                        if (res.data.success) {
                          router.push("/createShop");
                          localStorage.setItem("userId", res.data.user.id);
                          localStorage.setItem("email", res.data.user.email);
                          localStorage.setItem("phone", res.data.user.phone);
                          localStorage.setItem(
                            "username",
                            res.data.user.username
                          );
                          resetForm({ values: "" });
                          setAboutBtnState(false);
                        }
                      })
                      .catch((err) => {
                        console.error(err);
                        setAboutBtnState(false);
                      });
                  } else {
                    toast("username taken, try another one");
                    setAboutBtnState(false);
                  }
                })
                .catch((err) => {
                  console.error(err);
                  setAboutBtnState(false);
                });

              setSubmitting(true);
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .required("What would you like to be called")
                .matches(/^[a-zA-Z0-9_.]+$/, "Invalid username"),

              phone: Yup.string()
                .required("Phone number is Required")
                .matches(/^[0-9]{10}$/, "Invalid number"),
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
                      label="Username"
                      id="34743bdw"
                      name="username"
                      type="text"
                      component={InputText}
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className={styles2.phoneNumberSection}>
                    <div className={` ${styles2.item1}`}>
                      <InputSelect
                        label="+234"
                        options={phoneNumberOptions}
                        handleSelect={setGender}
                      />
                    </div>

                    <div className={styles2.item2}>
                      <Field
                        theme="light"
                        label="Phone Number"
                        id="34743bdw"
                        name="phone"
                        type="number"
                        component={InputText}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className={` ${styles.item}`}>
                    <InputSelect
                      label="Gender"
                      options={genderOptions}
                      handleSelect={setGender}
                    />
                  </div>

                  <div className={styles2.dateOfBirth}>
                    <div className={` ${styles2.item}`}>
                      <InputSelect
                        label="Day"
                        options={dayOptions}
                        handleSelect={setDay}
                      />
                    </div>

                    <div className={` ${styles2.item}`}>
                      <InputSelect
                        label="Month"
                        options={monthOptions}
                        handleSelect={setMonth}
                      />
                    </div>
                    <div className={` ${styles2.item}`}>
                      <InputSelect
                        label="Year"
                        options={yearOptions}
                        handleSelect={setYear}
                      />
                    </div>
                  </div>
                  {aboutBtnState && <Loader />}
                  <div className={styles.buttonSection}>
                    <ShopButton
                      size="large"
                      label="Next"
                      btnState={aboutBtnState}
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

export default AboutYourself;
