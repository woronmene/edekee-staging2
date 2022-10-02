import { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import styles from "./Navbar.module.scss";

import MobileNav from "../MobileNav/MobileNav";
// import useMedia from "../../Hooks/useMedia";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    // requestAnimationFrame(transitionNavBar)
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
    // playVideo()
  };

  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      toggle();
    }
  }, [router.asPath]);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar, {
      capture: true,
      passive: true,
    });
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${show && styles.nav__transluscent} ${
        styles.navFixed
      }`}
    >
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarLeft}>
          <Link href="/" className={styles.edekeeLogo}>
            {router.pathname !== "/createShop" &&
            router.pathname !== "/shop" &&
            router.pathname !== "/productPage" &&
            router.pathname !== "/topup" &&
            router.pathname !== "/signup" &&
            router.pathname !== "/signin" &&
            router.pathname !== "/createProduct" ? (
                <picture className={styles.logo}>
                  <source srcSet="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/edekee-logo.svg" media="(min-width: 800px)"/>
                  <img src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/logo-small.svg" alt=" "/>
                </picture>
              
            ) : (
              <svg
                width="46"
                height="40"
                viewBox="0 0 46 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.1596 22.027C42.0947 17.9201 41.9554 11.4008 37.8485 7.46574C33.7417 3.53067 27.2224 3.66994 23.2873 7.7768L8.74938 22.9494C7.70702 24.0373 7.74391 25.7642 8.83178 26.8065L19.7645 37.282C20.8524 38.3243 22.5793 38.2874 23.6216 37.1996L38.1596 22.027Z"
                  fill="#7630FA"
                />
                <g filter="url(#filter0_d_11787_8242)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.17218 8.28746C0.254054 12.4105 0.420153 18.9291 4.54318 22.8473L19.7755 37.3226C20.8677 38.3605 22.5944 38.3165 23.6323 37.2243L34.0626 26.2486C35.1005 25.1564 35.0565 23.4297 33.9643 22.3918L18.732 7.91646C14.609 3.99833 8.09031 4.16443 4.17218 8.28746ZM10.3476 17.2828C12.3002 17.2371 13.846 15.6172 13.8002 13.6646C13.7545 11.7121 12.1346 10.1663 10.182 10.212C8.22948 10.2578 6.6837 11.8777 6.72943 13.8303C6.77516 15.7828 8.39509 17.3286 10.3476 17.2828Z"
                    fill="#A271FF"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_11787_8242"
                    x="0.493579"
                    y="3.39243"
                    width="36.8553"
                    height="36.3714"
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
                    <feOffset dx="0.845289" />
                    <feGaussianBlur stdDeviation="0.845289" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_11787_8242"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_11787_8242"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            )}
          </Link>
        </div>
        {router.pathname !== "/createShop" &&
          router.pathname !== "/shop" &&
          router.pathname !== "/productPage" &&
          router.pathname !== "/topup" &&
          router.pathname !== "/signup" &&
          router.pathname !== "/signin" &&
          router.pathname !== "/createProduct" && (
            <div className={styles.navbarRight}>
              {" "}
              <Link href="/">
                <a
                  className={`${styles.navbarRightItem} ${
                    router.pathname === "/" ? styles.activeLink : ""
                  }`}
                >
                  Home
                </a>
              </Link>{" "}
              {/*<div className={styles.products}>*/}
              {/*  <a*/}
              {/*    className={`${styles.navbarRightItem} ${*/}
              {/*      router.pathname === "/products" ||*/}
              {/*      router.pathname === "/products/business" ||*/}
              {/*      router.pathname === "/products/creators" ||*/}
              {/*      router.pathname === "/products/developers"*/}
              {/*        ? styles.activeLink*/}
              {/*        : ""*/}
              {/*    }`}*/}
              {/*  >*/}
              {/*    Products{" "}*/}
              {/*    <span style={{ marginLeft: "5px" }}>*/}
              {/*      <svg*/}
              {/*        width="9"*/}
              {/*        height="6"*/}
              {/*        viewBox="0 0 9 6"*/}
              {/*        fill="none"*/}
              {/*        xmlns="http://www.w3.org/2000/svg"*/}
              {/*      >*/}
              {/*        <path*/}
              {/*          d="M1 1L3.84652 4.1515C4.25218 4.60062 4.96068 4.58929 5.35177 4.12743L8 1"*/}
              {/*          strokeWidth="1.54839"*/}
              {/*          className={`${*/}
              {/*            router.pathname === "/products" ||*/}
              {/*            router.pathname === "/products/business" ||*/}
              {/*            router.pathname === "/products/creators" ||*/}
              {/*            router.pathname === "/products/developers"*/}
              {/*              ? styles.activeStroke*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*          strokeLinecap="round"*/}
              {/*        />*/}
              {/*      </svg>*/}
              {/*    </span>*/}
              {/*  </a>*/}
              {/*  <div className={styles.subProducts}>*/}
              {/*    <div className={styles.container}>*/}
              {/*      {" "}*/}
              {/*      <Link href="/products">*/}
              {/*        <a*/}
              {/*          className={`${styles} ${*/}
              {/*            router.pathname === "/products"*/}
              {/*              ? styles.activeLink*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Everyone*/}
              {/*        </a>*/}
              {/*      </Link>{" "}*/}
              {/*      <Link href="/products/business">*/}
              {/*        <a*/}
              {/*          className={`${styles} ${*/}
              {/*            router.pathname === "/products/business"*/}
              {/*              ? styles.activeLink*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Business*/}
              {/*        </a>*/}
              {/*      </Link>{" "}*/}
              {/*      <Link href="/products/creators">*/}
              {/*        <a*/}
              {/*          className={`${styles} ${*/}
              {/*            router.pathname === "/products/creators"*/}
              {/*              ? styles.activeLink*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Creators*/}
              {/*        </a>*/}
              {/*      </Link>{" "}*/}
              {/*      /!* <Link href="/products/developers"> *!/*/}
              {/*      /!* <a className={`${styles} ${((router.pathname === "/products/developers") ? styles.activeLink : "")}`}>Developers</a> *!/*/}
              {/*      /!* </Link> *!/*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>{" "}*/}
              {/* <a href="#"> */}
              {/*     <div className={styles.navbarRightItem}>Documentation</div> */}
              {/* </a>{" "} */}
              <Link href="/products/business">
                <a
                  className={`${styles.navbarRightItem} ${
                    router.pathname === "/products/business" ? styles.activeLink : ""
                  }`}
                >
                  For Brands
                </a>
              </Link>
              <Link href="/products/creators">
                <a
                  className={`${styles.navbarRightItem} ${
                    router.pathname === "/products/creators" ? styles.activeLink : ""
                  }`}
                >
                  For Creators
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={`${styles.navbarRightItem} ${
                    router.pathname === "/contact" ? styles.activeLink : ""
                  }`}
                >
                  Contact Us
                </a>
              </Link>
              <Link href="./signup">
                {/* <Link href="src/common/components/Navbar/Navbar"> */}
                <p
                  className={`${styles.navbarRightItem} ${styles.actionButton}`}
                >
                  Get Started
                </p>
              </Link>
            </div>
          )}
        {router.pathname !== "/shop" &&
        router.pathname !== "/productPage" &&
        router.pathname !== "/topup" &&
        router.pathname !== "/createShop" ? (
          <div className={styles.menuIcon} onKeyDown={toggle} onClick={toggle}>
            <span>
              <img
                src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/menu.svg"
                alt="menu"
              />
            </span>
          </div>
        ) : (
          <p
            onClick={() => {
              localStorage.clear();
              router.push("/signin");
            }}
            style={{ color: "black", cursor: "pointer" }}
          >
            Logout
          </p>
        )}

        {/* eslint-disable-next-line react/jsx-no-bind */}
        <MobileNav isOpen={isOpen} toggle={toggle} />
      </div>
    </nav>
  );
}

export default Navbar;
