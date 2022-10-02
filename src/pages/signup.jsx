import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import toast, { toastConfig } from "react-simple-toasts";

import { CreateAccount, VerifyOtp, AboutYourself } from "../modules/SignupPage";

export default function Signup() {
  const [currentPage, setCurrentPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpBtnState, setSignUpBtnState] = useState(false);
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [numberCode, setNumberCode] = useState("+234");
  const [forceUpdate, setForceUpdate] = useState(true);
  const [showOtp, setShowOtp] = useState("");

  toastConfig({
    time: 6000,
  });

  const generateOtp = (emailValue) => {
    setSignUpBtnState(true);
    const params = {
      email: emailValue,
      type: "sms",
    };
    axios
      .post("https://edekee-backend.herokuapp.com/v1/api/auth/generate/otp", params)
      .then((res) => {
        setShowOtp(res.data.data.otp);
        setForceUpdate(!forceUpdate);

        if (res.status === 200) {
          setCurrentPage(1);
        }
      })
      .catch((err) => {
        if (err.message) {
          toast(err.message)
          setSignUpBtnState(false);
          return
        }
        toast(err.response.data.message);

        setSignUpBtnState(false);
      });
  };

  const getCurrentPage = () => {
    if (currentPage === 0)
      return (
        <CreateAccount
          setCurrentPage={setCurrentPage}
          setEmail={setEmail}
          setPassword={setPassword}
          generateOtp={generateOtp}
          signUpBtnState={signUpBtnState}
          setSignUpBtnState={setSignUpBtnState}
        />
      );
    if (currentPage === 1)
      return (
        <VerifyOtp
          email={email}
          password={password}
          setCurrentPage={setCurrentPage}
          showOtp={showOtp}
        />
      );
    if (currentPage === 2)
      return (
        <AboutYourself
          setCurrentPage={setCurrentPage}
          gender={gender}
          email={email}
          setGender={setGender}
          day={day}
          setDay={setDay}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          numberCode={numberCode}
          setNumberCode={setNumberCode}
        />
      );
  };

  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Edekee Website" />

        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/114x114.png"
        />
        <link rel="icon" href="/edekee_favicon.svg" />
      </Head>

      <main>{getCurrentPage()}</main>
    </div>
  );
}
