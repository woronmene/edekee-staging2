import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import toast, { toastConfig } from "react-simple-toasts";
import styles from "./BuildShopAction.module.scss";
import { useRouter } from "next/router";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function BuildShopAction({ setCurrentPage }) {
  const [walletBalance, setWalletBalance] = useState(0);
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const username = localStorage.getItem("username");

  toastConfig({
    time: 3000,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://edekee-backend.herokuapp.com/v1/api/wallet/get_user_wallet`, {
        headers: {
          Authorization: token,
          portal: "web",
        },
      })
      .then((response) => {
        if (response.data.success) {
          setWalletBalance(response.data.data.balance);
        }
      })
      .catch((err) => {
        if (err.response.data.message === "This user has no wallet") {
          const params = {
            balance: 0,
          };
          axios
            .post(`https://edekee-backend.herokuapp.com/v1/api/wallet/save`, params, {
              headers: {
                Authorization: token,
                portal: "web",
              },
            })
            .then((res) => {
              setWalletBalance(res.data.data.balance);
            })
            .catch((err) => {});
        }
      });
  }, []);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
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
      // logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const router = useRouter();

  return (
    <div className={styles.buildShopAction}>
      <div className={styles.wrapper}>
        <div className={styles.fundWalletSection}>
          <div className={styles.walletBalance}>
            <div className={styles.balance}>₦ {walletBalance}</div>
            <div className={styles.fundWalletText}>Wallet Balance</div>
          </div>
          <div className={styles.buttonSection}>
            <ShopButton
              size="small"
              label="Fund wallet"
              // btnState={signinBtnState}
              // buttonType="submit"
              handleClick={() => {
                router.push("/topup");
              }}
            />
          </div>
        </div>

        <div className={styles.mainHeading}>
         {  !localStorage.getItem("shopId") ? <> <p className={styles.heading}>Build your shop</p>
          <p className={styles.info}>
            Create your shop and recieve orders from videos and movies across
            the web.
          </p></>: <> <p className={styles.heading}>Visit your shop</p>
          <p className={styles.info}>
            Visit your shop and recieve orders from videos and movies across
            the web.
          </p></>}
          <p className={styles.info}>{process.env.FLW_PUBLIC_KEY}</p>
        </div>
        <div className={styles.buttonSection}>
          <ShopButton
            size="large"
            label={
              localStorage.getItem("shopId") ? "Visit Shop" : "Create Shop"
            }
            handleClick={() => {
              // handleFlutterPayment({
              //   callback: (response) => {

              //     if (response.status === "successful") {
              //       localStorage.setItem("currentPager", 1);
              //       setCurrentPage(1);
              //     }

              //     closePaymentModal();
              //   },
              //   onClose: () => {},
              // });
              // localStorage.setItem("currentPager", 1);
              if (localStorage.getItem("shopId")) {
                // toast("you already have shop");
                router.push("/shop");
              } else {
                setCurrentPage(1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BuildShopAction;
