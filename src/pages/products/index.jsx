import React from "react";
import Head from "next/head";
import { Footer } from "../../common/components";
import { JustHeader, ProductLayout1, ProductLayout2, WhatElse } from "../../modules/ProductsPage";
import styles from "../../modules/ProductsPage/ProductPage.module.scss";
import Script from "next/script";

export default function Index() {
  return (
    <>
      <Head>
        <title>edekee | For Everyone </title>
        <link rel="preconnect" href="https://d3t7szus8c85is.cloudfront.net" />
        <link rel="preload" as="image"
              href="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/everyone_slide.webp" />
        <link rel="preload" as="image"
              href="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/everyone_pause.webp" />
        <link rel="apple-touch-icon" sizes="57x57"
              href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/57x57.png" />
        <link rel="apple-touch-icon" sizes="114x114"
              href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/114x114.png" />
        <link rel="apple-touch-icon" sizes="72x72"
              href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/72x72.png" />
        
        <link rel="icon" href="/edekee_favicon.svg" />
      </Head>
      <div className={styles.products}>
        <ProductLayout1 preload="auto" auto={1}
                        poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/everyone_slide.webp"
                        video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/everyone_slide.mp4"
                        heading1="Amazing contents."
                        heading2="awaits you"
                        body={<>Swipe and browse through thrilling video contents. <span
                          className="globalTextDark100">Like</span>, <span
                          className="globalTextDark100">Comment</span> or <span
                          className="globalTextDark100">Share</span> any video of interest.</>} />
        <JustHeader header="See what you like?" />
        <ProductLayout2 poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/everyone_pause.webp"
                        video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/everyone_pause.mp4"
                        heading1="Just" heading2="Pause"
                        body={<>When you pause while watching a video, you may now see different brands and items thanks
                          to our <span className="globalTextDark100">pop up tags. </span> Make your everyday videos more
                          meaningful.</>} />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <ProductLayout1 auto={1} preload="none"
                        poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/everyone_buy.webp"
                        video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/everyone_buy.mp4"
                        heading1="Buy it"
                        body={<>Choose the quantity, color, and size of your desired item. Add to cart or purchase right
                          away by entering your card information, then proceed to checkout to pay and <span
                            className="globalTextDark100">voilà!</span> It's entirely yours.</>} />
        {/* <Layout1 poster={'https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/everyone_buy.webp'} video={'https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/everyone_buy.webm'} heading1="Buy it" body="Choose the quantity, color, and size of your desired item. Add to cart or purchase right away by entering your card information, then proceed to checkout to pay and voilà! It's entirely yours."/> */}
        <WhatElse />
      </div>
      <Footer />
      <Script strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`} />
  
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
}

