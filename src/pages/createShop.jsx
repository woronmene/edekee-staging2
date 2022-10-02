import axios from "axios";
import { useState, useEffect } from "react";
import { BuildShopMod, BuildShopAction } from "../modules/CreateShopPage";
import { useRouter } from "next/router";

export default function CreateShop() {
  const [currentPage, setCurrentPage] = useState(0);

  const [logoFile, setLogoFile] = useState("");
  const [categoryArray, setCategoryArray] = useState([]);
  const [shopCategory, setShopCategory] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [city, setCity] = useState("");
  const [localDelivery, setLocalDelivery] = useState("");
  const [internationalDelivery, setInternationalDelivery] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("userId") || "";

    if (user === "") {
      router.push("/signup");
    }
  }, [router]);

  useEffect(() => {
    if (localStorage.getItem("currentPager") === "1") {
      setCurrentPage(1);
    }
  }, []);

  useEffect(() => {
    axios.get("https://edekee-backend.herokuapp.com/v1/api/category").then((res) => {
      if (res.data.success) {
        setCategoryArray(res.data.data);
      }
    });
  }, []);

  const getCurrentPage = () => {
    if (currentPage === 0)
      return <BuildShopAction setCurrentPage={setCurrentPage} />;
    if (currentPage === 1)
      return (
        <BuildShopMod
          setCurrentPage={setCurrentPage}
          setLogoFile={setLogoFile}
          logoFile={logoFile}
          categoryArray={categoryArray}
          shopCategory={shopCategory}
          setShopCategory={setShopCategory}
          setStateOfOrigin={setStateOfOrigin}
          city={city}
          stateOfOrigin={stateOfOrigin}
          setCity={setCity}
          localDelivery={localDelivery}
          internationalDelivery={internationalDelivery}
          setInternationalDelivery={setInternationalDelivery}
          setLocalDelivery={setLocalDelivery}
          deliveryStatus={deliveryStatus}
          setDeliveryStatus={setDeliveryStatus}
        />
      );
  };
  return (
    <div>
      <main>{getCurrentPage()}</main>
    </div>
  );
}
