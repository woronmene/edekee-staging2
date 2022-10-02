import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import { motion } from "framer-motion";
import navbarStyles from "../Navbar/Navbar.module.scss";

import styles from "./MobileNav.module.scss";

// eslint-disable-next-line react/prop-types
function Navbar({ isOpen, toggle }) {
  // eslint-disable-next-line no-unused-vars
  const [showDrop, setShowDrop] = useState(false);
  const router = useRouter();
  const variants = {
    initial: {
      translateX: `${100}%`,
      opacity: 0,
    },
    target: {
      translateX: 0,
      opacity: 1,
    },
  };

  function toggleDropDown() {
    setShowDrop(!showDrop);
  }

  useEffect(() => {
    if (showDrop) {
      toggleDropDown();
    }
  }, [router.asPath]);

  // eslint-disable-next-line no-unused-vars

  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "target" : "initial"}
      className={`${styles.mobileNav}`}
    >
      <div className={styles.cancel}>
        <img
          onClick={toggle}
          src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/cancel-nav.svg"
          alt=""
        />
      </div>
      <div className={styles.links}>
        {" "}
        <Link href="/" prefetch={false}>
          <a
            className={`${styles.items} ${
              router.pathname === "/" ? navbarStyles.activeLink : ""
            }`}
          >
            Home
          </a>
        </Link>{" "}
        {/*<div className={styles.items}>*/}
        {/*  <a*/}
        {/*    onClick={toggleDropDown}*/}
        {/*    className={`${*/}
        {/*      router.pathname === "/products" ||*/}
        {/*      router.pathname === "/products/business" ||*/}
        {/*      router.pathname === "/products/creators" ||*/}
        {/*      router.pathname === "/products/developers"*/}
        {/*        ? navbarStyles.activeLink*/}
        {/*        : ""*/}
        {/*    }`}*/}
        {/*  >*/}
        {/*    Products*/}
        {/*  </a>*/}
        {/*  <div*/}
        {/*    className={`${styles.dropMenu} ${*/}
        {/*      showDrop ? styles.show : styles.hide*/}
        {/*    }`}*/}
        {/*  >*/}
        {/*    <Link href="/products" prefetch={false}>*/}
        {/*      <a*/}
        {/*        className={`${styles.subItems} ${*/}
        {/*          router.pathname === "/products" ? navbarStyles.activeLink : ""*/}
        {/*        }`}*/}
        {/*      >*/}
        {/*        Everyone*/}
        {/*      </a>*/}
        {/*    </Link>{" "}*/}
        {/*    <Link href="/products/business" prefetch={false}>*/}
        {/*      <a*/}
        {/*        className={`${styles.subItems} ${*/}
        {/*          router.pathname === "/products/business"*/}
        {/*            ? navbarStyles.activeLink*/}
        {/*            : ""*/}
        {/*        }`}*/}
        {/*      >*/}
        {/*        Business*/}
        {/*      </a>*/}
        {/*    </Link>{" "}*/}
        {/*    /!* <Link href="/products/creators"> *!/*/}
        {/*    /!*     <a className={`${styles.subItems} ${((router.pathname === "/products/creators") ? navbarStyles.activeLink : "")}`}>Creators</a> *!/*/}
        {/*    /!* </Link> *!/ /!* <Link href="/products/developers"> *!/*/}
        {/*    /!*     <a className={`${styles.subItems} ${((router.pathname === "/products/developers") ? navbarStyles.activeLink : "")}`}>Developers</a> *!/*/}
        {/*    /!* </Link>{" "} *!/*/}
        {/*  </div>*/}
        {/*</div>{" "}*/}
        {/* <Link href="src/common/components/Navbar/Navbar#contact"> */}
        {/*     <a className={styles.items}>Documentation</a> */}
        {/* </Link>{" "} */}
        <Link href="/products/business">
          <a
            className={`${styles.items} ${
              router.pathname === "/products/business" ? navbarStyles.activeLink : ""
            }`}
          >
            For Brands
          </a>
        </Link>{" "}
        <Link href="/products/creators">
          <a
            className={`${styles.items} ${
              router.pathname === "/products/creators" ? navbarStyles.activeLink : ""
            }`}
          >
            For Creators
          </a>
        </Link>{" "}
        <Link href="/contact">
          <a
            className={`${styles.items} ${
              router.pathname === "/contact" ? navbarStyles.activeLink : ""
            }`}
          >
            Contact Us
          </a>
        </Link>{" "}
        <Link href="/signup">
          <p className={` ${styles.items} ${styles.actionButton}`}>
            Get Started
          </p>
        </Link>
        {/* </Link> */}
      </div>
    </motion.div>
  );
}

export default Navbar;
