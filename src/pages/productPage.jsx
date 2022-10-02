import Head from "next/head";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import { useRouter } from "next/router";

import ShopProducts from "../modules/ShopProducts/ShopProducts";

export default function ProductPage() {
  const { subcategoryId } = useAppContext();
  const [subcategories, setSubcategories] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (subcategoryId === "") {
      router.push("/shop");
    }
  }, [router, subcategoryId]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const shop = localStorage.getItem("shopId");
    axios
      .get(
        `https://edekee-backend.herokuapp.com/v1/api/shop/${shop}/subcategory/${subcategoryId}/products`,
        {
          headers: {
            Authorization: token,
            portal: "web",
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          setSubcategories(response.data.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [subcategoryId]);

  return (
    <div>
      <Head>
        <title>shop</title>
        <meta name="description" content="Edekee Website" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/114x114.png"
        />

        <link rel="icon" href="/edekee_favicon.svg" />
      </Head>

      <main>
        <ShopProducts subcategories={subcategories} type="product" />
      </main>
    </div>
  );
}
