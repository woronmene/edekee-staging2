
import { ShopPage } from "../modules/ShopPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Shop() {
  const [subcategories, setSubcategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // const shop = localStorage.getItem("shopId") || "";
    const user = localStorage.getItem("userId") || "";

    if (user === "") {
      router.push("/signup");
    }
 
   
  }, []);

  return (
    <div>
      <main>
        <ShopPage subcategories={subcategories} setSubcategories={setSubcategories} type="shop" />
      </main>
    </div>
  );
}
