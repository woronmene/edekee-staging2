import { useEffect, useState } from "react";
import "../styles/main.scss";
import { AppProvider } from "../context/AppContext";
import NavbarLayout from "../Layout/NavbarLayout/NavbarLayout";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <AppProvider>
      <NavbarLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </NavbarLayout>
    </AppProvider>
  );
}
