import Head from "next/head";
import {Footer} from "../../common/components";
import styles from "../../modules/ProductsPage/ProductPage.module.scss";
import {HavePlatform, JustHeader, ProductLayout1, ProductLayout2} from "../../modules/ProductsPage";
// import Script from "next/script";

export default function Business() {
    return (
        <>
            <Head>
                <title>edekee | For Brands </title>
                <link rel="preconnect" href="https://d3t7szus8c85is.cloudfront.net"/>
                <link rel="preload" as="image" href="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business_showcase.webp"/>
                <link rel="preload" as="image" href="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business_product.webp"/>
                <link rel="apple-touch-icon" sizes="57x57"
                      href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/57x57.png"/>
                <link rel="apple-touch-icon" sizes="114x114"
                      href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/114x114.png"/>
                <link rel="apple-touch-icon" sizes="72x72"
                      href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/72x72.png"/>

                <link rel="icon" href="/edekee_favicon.svg"/>
             
            </Head>
            <div className={styles.products}>
                <ProductLayout1
                  preload="auto"
                  auto={1}
                    poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business_showcase.webp"
                    video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/business_showcase.mp4"
                    heading1="Showcase your " heading2="products & services"
                    body={<>Put your products up for display to a global customer base, <span
                        className="globalTextDark100">increase revenue</span> when people purchase items from your shop
                        on Edekee through videos</>}/>
                <JustHeader header="How to do this"/>
                <ProductLayout2
                    poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business_product.webp"
                    video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Business_product.mp4"
                    heading1="Create your" heading2="product on Edekee"
                    body={<>To get started, click on the <span
                        className="globalTextDark100">create button,</span> upload a short 360° video, still pictures
                        and details of your product.</>}/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <ProductLayout1
                  preload="none"
                  auto={1}
                    // poster={'https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business_service.webp'}
                    poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business_showcase.webp"
                                video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Business_service.mp4"
                                heading1="Create your " heading2="service on Edekee"
                                body={<>Do you own a service-oriented brand? Your brand&apos;s services can be <span
                                    className="globalTextDark100">recognised</span> and <span
                                    className="globalTextDark100">tagged</span> in videos. Add your service, service
                                    category, pricing, and images by clicking the create button. </>}/>
                {/* <WhatElse/> */}
                <HavePlatform/>
            </div>
            <Footer/>
          {/* <Script strategy="lazyOnload"
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`} />
  
          <Script strategy="lazyOnload">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', {
                    page_path: window.location.pathname,
                    });
                `}
          </Script> */}
        </>

    )
}