/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import toast, { toastConfig } from "react-simple-toasts";

import { Field, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styles from "./Contact.module.scss";
import childVariant from "../../../common/Motion/text";
import InputText from "../../../common/components/InputText/InputText";
import InputTextArea from "../../../common/components/InputTextArea/InputTextArea";

toastConfig({
  time: 3000,
});

function Contact() {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    phone: "",
  };
  const onSubmit = async (data, setSubmitting, resetForm) => {
    const formData = new FormData();
    
    formData.append("name", `${data.firstName} ${data.lastName}`);
    formData.append("subject", "no subject");
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    
    // await fetch(url, {
    //   method: "POST",
    //   body: formData,
    //   // eslint-disable-next-line no-console
    // });
    await axios.post("http://admin.edekee.io/api/v1/contact-us/", formData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      console.log("res" + res);
      toast("Sent Successfully");
    })
    .catch((error) => {
      console.error("error" + ' ' + error.response.data);
      toast("Please Try Again Later");
    })
    .finally(() => {
      setSubmitting(false);
      resetForm({ values: "" });
    });
    
    // ...
  };
  
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <div className={`${styles.content}`}>
          <motion.div
            variants={childVariant}
            initial="rest"
            whileInView="visible"
            viewport={{ once: true }}
            className={` globalContainer ${styles.container}`}
          >
            <p className={`header8 ${styles.header}`}>Get in Touch</p>
            <p className="globalTextDark300">
              We are happy to receive feedbacks and suggestions
            </p>
            <div className={styles.info}>
              <div className={styles.section}>
                <div>
                  <svg
                    width="49"
                    height="50"
                    viewBox="0 0 49 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_8717_1543)">
                      <path
                        d="M24.5 10C18.695 10 14 14.695 14 20.5C14 25.2531 17.8251 31.3724 20.8579 35.4771C22.7061 37.9785 26.2939 37.9785 28.1421 35.4771C31.1749 31.3724 35 25.2531 35 20.5C35 14.695 30.305 10 24.5 10ZM24.5 24.25C22.43 24.25 20.75 22.57 20.75 20.5C20.75 18.43 22.43 16.75 24.5 16.75C26.57 16.75 28.25 18.43 28.25 20.5C28.25 22.57 26.57 24.25 24.5 24.25Z"
                        stroke="#A271FF"
                        strokeWidth="2.13"
                        shapeRendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_8717_1543"
                        x="0.335547"
                        y="0.535059"
                        width="48.3289"
                        height="54.6829"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4.2" />
                        <feGaussianBlur stdDeviation="6.3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_8717_1543"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_8717_1543"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p>Mulliner Towers, 39 Alfred Rewane Road, Ikoyi, Lagos.</p>
              </div>
              <div className={styles.section}>
                <div>
                  <svg
                    width="29"
                    height="26"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1098 17.7727C15.9153 18.3401 16.7599 18.8173 17.6304 19.1784C18.1709 19.3744 19.0191 18.8193 19.6428 18.4112L19.6429 18.4111C19.7987 18.3091 19.9406 18.2163 20.0601 18.1467L20.0993 18.1247C20.6867 17.7948 21.3391 17.4284 22.1779 17.605C22.9315 17.7598 25.517 19.7974 26.2316 20.5196C26.6994 20.9839 26.9592 21.4739 26.9982 21.9769C27.0762 23.8468 24.5686 25.9489 23.9709 26.31C22.6976 27.2385 20.9955 27.2256 18.9427 26.2971C16.7469 25.4073 14.1223 23.5373 11.5887 21.2676C10.6818 20.4551 8.9401 18.7444 8.44444 18.1731C5.88486 15.4004 3.72805 12.4214 2.71461 10.0098C2.23387 8.99095 2 8.04952 2 7.21126C2 6.3859 2.23387 5.65082 2.68862 5.0189C2.96147 4.54174 5.15726 1.93669 7.09319 2.00118C7.57392 2.05276 8.06765 2.29779 8.54838 2.76206C9.27598 3.47135 11.3678 6.0377 11.5237 6.79858C11.7016 7.61835 11.3328 8.26544 11.0005 8.84842L11.0005 8.84842L10.978 8.88778C10.9031 9.01718 10.8016 9.17068 10.6906 9.33849C10.2816 9.95672 9.74418 10.7692 9.93732 11.2865C10.4193 12.4729 11.108 13.6336 11.9382 14.704C12.8596 15.8057 14.3042 17.2053 15.1098 17.7727Z"
                      stroke="#A271FF"
                      strokeWidth="2.13429"
                    />
                  </svg>
                </div>
                <p>(+234) 813 474 8311</p>
              </div>
              <div className={styles.section}>
                <div>
                  <svg
                    width="24"
                    height="26"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.295 9.90915C21.295 7.70928 21.1519 5.99018 20.7597 4.6546C20.6743 4.36384 20.5771 4.09125 20.4669 3.83583C20.3471 3.55791 20.212 3.30033 20.0603 3.06178C18.6889 0.906456 15.955 0.305607 10.8184 0.305607C5.67306 0.305607 2.93865 0.908493 1.56956 3.07274C1.42753 3.29727 1.30019 3.5386 1.18638 3.7978C1.06645 4.07094 0.961542 4.36392 0.870288 4.678C0.483212 6.01024 0.341797 7.7221 0.341797 9.90915C0.341797 17.8177 2.19092 19.5127 10.8184 19.5127C19.4459 19.5127 21.295 17.8177 21.295 9.90915ZM4.85387 6.22352C4.01654 5.5321 3.29466 4.83852 2.76281 4.2951C3.16639 3.47014 3.77078 2.94023 4.85681 2.56927C6.12886 2.13477 7.99989 1.94535 10.8184 1.94535C12.9413 1.94535 14.544 2.05145 15.7677 2.30076C16.9803 2.54778 17.707 2.91323 18.184 3.35043C18.4441 3.58891 18.6718 3.8875 18.8652 4.27661C18.3337 4.82166 17.6079 5.52158 16.7645 6.21962C15.8691 6.9606 14.8573 7.68603 13.8178 8.22345C12.7722 8.76406 11.7491 9.08803 10.8173 9.08928C9.88355 9.09053 8.858 8.76797 7.80944 8.2279C6.76708 7.69102 5.75212 6.96524 4.85387 6.22352ZM1.98154 9.90915C1.98154 8.30189 2.0626 7.05462 2.2315 6.07722C2.68747 6.51604 3.22084 7.00157 3.80981 7.48791C4.76272 8.27477 5.87734 9.07721 7.05861 9.68564C8.23369 10.2909 9.52584 10.7308 10.8195 10.729C12.1104 10.7273 13.3991 10.2859 14.5709 9.68003C15.7488 9.07101 16.86 8.26898 17.8099 7.48286C18.4046 6.99069 18.9424 6.49949 19.4007 6.05685C19.5686 7.02167 19.6552 8.27132 19.6552 9.90915C19.6552 13.9077 19.1388 15.5926 18.184 16.4679C17.707 16.9051 16.9803 17.2705 15.7677 17.5175C14.544 17.7668 12.9413 17.873 10.8184 17.873C8.69552 17.873 7.0928 17.7668 5.86903 17.5175C4.65651 17.2705 3.92974 16.9051 3.4528 16.4679C2.49795 15.5926 1.98154 13.9077 1.98154 9.90915ZM7.32617 13.4555C6.87337 13.4555 6.5063 13.8226 6.5063 14.2754C6.5063 14.7282 6.87337 15.0953 7.32617 15.0953H14.3106C14.7634 15.0953 15.1304 14.7282 15.1304 14.2754C15.1304 13.8226 14.7634 13.4555 14.3106 13.4555H7.32617Z"
                      fill="#A271FF"
                    />
                  </svg>
                </div>
                <p>info@edekee.com</p>
              </div>
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                onSubmit(values, setSubmitting, resetForm);
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required("We need it to reach you"),
                phone: Yup.string().required("We need it to reach you "),
                firstName: Yup.string().required("We need it to identify you"),
                lastName: Yup.string().required("We need it to identify you"),
                message: Yup.string().required(
                  "What do you want to talk about ",
                ),
              })}
            >
              {(props) => {
                const {
                  values,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className={`${styles.item}`}>
                      <Field
                        theme="dark"
                        label="First Name"
                        id="347843bdw"
                        name="firstName"
                        type="text"
                        component={InputText}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className={` ${styles.item}`}>
                      <Field
                        theme="dark"
                        label="Last Name"
                        id="3473bdw"
                        name="lastName"
                        type="text"
                        component={InputText}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className={styles.item}>
                      <Field
                        theme="dark"
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
                    <div className={styles.item}>
                      <Field
                        theme="dark"
                        label="Phone"
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
                        label="Message"
                        id="3473bdw"
                        name="message"
                        component={InputTextArea}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></Field>
                      {/* <InputTextArea type="text" label="Message"/> */}
                    </div>
                    <div className={styles.button}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.Button}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </motion.div>
        </div>
        <div className={`${styles.imgContainer}`}>
          {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/logistics.webp */}
          <img
            className="image"
            loading="eager"
            src="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/images/contact.jpg"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
