import OtpInput from "react-otp-input";
import { useState } from "react";
import axios from "axios";
import toast, { toastConfig } from "react-simple-toasts";
import styles from "../../CreateShopPage/BuildShop/BuildShop.module.scss";
import styles2 from "./VerifyOtp.module.scss";
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import Loader from "../../../common/components/Loader/Loader";

// import { useNavigate } from "react-router-dom";
// import Button from "../../../../common/components/ui/Button/Button";

export default function VerifyOtp({
  setCurrentPage,
  email,
  password,
  showOtp,
}) {
  const [otp, setOtp] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  toastConfig({
    time: 6000,
  });

  const interests = [
    "284fe0cd-f693-4271-9a9c-dc51fc2a2405",
    "1daacf30-01c6-41f1-b00d-4767ed80e1d0",
    "108185e1-ebc8-4f1b-b0f2-321925e8ecb0",
  ];
  function verifyOtp(otpValue) {
    setLoading(true);
    const params = {
      code: otpValue,
      email,
      password,
      interests,
    };
    setShowLoader(true);

    axios
      .post("https://edekee-backend.herokuapp.com/v1/api/auth/verify/otp", params)
      .then((res) => {
        localStorage.clear();
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          setCurrentPage(2);
          setShowLoader(false);
        } else {
          toast("wrong Otp. Try again");
          setOtp("");
          setShowLoader(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setShowLoader(false);
      });
  }
  const handleChange = (newOtp) => {
    setOtp(newOtp);

    if (newOtp.length === 6) {
      // eslint-disable-next-line no-console,no-alert
      verifyOtp(newOtp);
      // handleOtpVerification(newOtp);
    }
  };

  const resendOtp = () => {
    // setSignUpBtnState(true);
    const params = {
      email,
      type: "sms",
    };

    axios
      .post("https://edekee-backend.herokuapp.com/v1/api/auth/generate/otp", params)
      .then((res) => {
        if (res.status === 200) {
          // setCurrentPage(1);
          toast(`Otp sent to: ${params.email}`);
        }
      })
      .catch((err) => {
        console.error(err);
        // toast(err.response.data.message);
        // setSignUpBtnState(false);
      });
  };

  return (
    <div className={styles.buildShop}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.mainHeading}>
            <p className={styles.heading}>Verify Email</p>
            <p className={styles.info}>
              Enter 6-digit pin sent to your email {email}
            </p>
          </div>
          <div className={styles2.verifyOtp}>
            {/* <p className="auth-header">Let’s Verify your Email Address</p>
      <p className="py-8 pb-16 text-sm opacity-80 text-center">
        {" "}
        A verification code has been sent to you email address
        akj*******@gmail.com
      </p> */}
            <form>
              {/* eslint-disable-next-line no-console */}
              <OtpInput
                value={otp}
                isInputNum="true"
                onChange={(e) => {
                  handleChange(e);
                }}
                numInputs={6}
                inputStyle={{
                  width: "40px",
                  height: "62px",
                  fontSize: "24px",
                  fontWeight: "700",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid black",
                  color: "#212121F2",

                  margin: "0 7px",
                }}
                containerStyle={{
                  display: "flex",
                  justifyContent: "center",
                  width: "70%",
                  // border: "1px solid red",
                  margin: "0 auto",
                }}
              />
{/* removed otp text */}
              <p
                className={styles2.resendOtp}
                onClick={() => {
                  resendOtp();
                }}
              >
                Resend Otp
              </p>
            
              {showLoader && <Loader />}
              <div className={styles.buttonSection}>
                <ShopButton
                  size="large"
                  label="Verify"
                  handleClick={() => {
                    setCurrentPage(2);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
