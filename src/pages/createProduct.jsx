import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import {
  CreateProductAction,
  ProductInfo,
  CreateProductDetails,
} from "../modules/CreateProductPage";
import toast from "react-simple-toasts";

export default function CreateProduct() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pictureFiles, setPictureFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState("");
  const [productType, setProductType] = useState("Buy");
  const [currency, setCurrency] = useState("NG");
  const [colors, setColors] = useState([]);

  const [productInfoBtnState, setProductInfoBtnState] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const shop = localStorage.getItem("shopId") || "";
    const user = localStorage.getItem("userId") || "";

    if (user === "") {
      router.push("/signup");
    }
    if (!shop) {
      router.push("/createShop");
    }
  }, [router]);

  useEffect(() => {
    axios
      .get(
        `https://edekee-backend.herokuapp.com/v1/api/subcategory/category/${localStorage.getItem(
          "categoryId"
        )}`
      )
      .then((res) => {
        if (res.data.success) {
          setCategoryArray(res.data.data);
        }
      });
  }, []);

  const createProduct = (
    productName,
    // productCategory,
    description,
    price
  ) => {
    let params;

    if (productType === "Buy") {
      params = {
        name: productName,
        brand: localStorage.getItem("shopName"),
        category: localStorage.getItem("categoryId"),
        shop: localStorage.getItem("shopId"),
        subcategory: subCategoryId,
        description,
        price: price,
        quantity: 34,
        currency: currency,

        colors,
      };
    } else if (productType === "Gift") {
      params = {
        name: productName,
        brand: localStorage.getItem("shopName"),
        category: localStorage.getItem("categoryId"),
        shop: localStorage.getItem("shopId"),
        subcategory: subCategoryId,
        description,
        price: price,
        quantity: 34,
        currency: currency,

        productType: productType,
        colors,
      };
    } else {
      params = {
        name: productName,
        brand: localStorage.getItem("shopName"),
        category: localStorage.getItem("categoryId"),
        shop: localStorage.getItem("shopId"),
        subcategory: subCategoryId,
        description,
        price: price,
        quantity: 34,
        currency: currency,
        rentPrice: 9,
        productType: productType,
        colors,
      };
    }

    setProductInfoBtnState(true);

    toast("This might take while, please be patient");
    axios
      .post("https://edekee-backend.herokuapp.com/v1/api/product/new", params, {
        headers: {
          Authorization: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        if (res.data.success) {
          const toastInterval = setInterval(() => {
            toast("Product uploading...");
          }, 6000);

          const formDataVideo = new FormData();
          pictureFiles.map((pic) => formDataVideo.append("product_image", pic));
          formDataVideo.append("product_video", videoFile);

          axios
            .post(
              ` https://edekee-backend.herokuapp.com/v1/api/product/upload/${res.data.data.id}`,
              formDataVideo,
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                  portal: "web",
                },
              }
            )
            .then((response) => {
              if (response.data.success) {
                clearInterval(toastInterval);
                toast("product uploaded successfully");

                setTimeout(() => {
                  router.push("/shop");
                }, 3000);
              }
            })
            .catch((err) => {
              console.error(err);
              setProductInfoBtnState(false);
              clearInterval(toastInterval);
              toast("an error occurred, try again");
            });
        } else {
          // clearInterval(toastInterval);
          setProductInfoBtnState(false);
        }
      })
      .catch((err) => {
        console.error(err);
        // clearInterval(toastInterval);
        toast("an error occurred, try again");
        setProductInfoBtnState(false);
      });
  };
  const getCurrentPage = () => {
    if (currentPage === 0)
      return <CreateProductAction setCurrentPage={setCurrentPage} />;
    if (currentPage === 1) {
      return (
        <CreateProductDetails
          setCurrentPage={setCurrentPage}
          pictureFiles={pictureFiles}
          setPictureFiles={setPictureFiles}
          videoFile={videoFile}
          setVideoFile={setVideoFile}
          setColors={setColors}
        />
      );
    }
    if (currentPage === 2) {
      return (
        <ProductInfo
          setCurrentPage={setCurrentPage}
          categoryArray={categoryArray}
          setCategoryArray={setCategoryArray}
          subCategoryId={subCategoryId}
          setSubCategoryId={setSubCategoryId}
          setProductType={setProductType}
          productType={productType}
          createProduct={createProduct}
          productInfoBtnState={productInfoBtnState}
          setCurrency={setCurrency}
        />
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Products</title>
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
