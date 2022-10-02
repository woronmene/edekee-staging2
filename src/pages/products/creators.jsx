import {Footer} from "../../common/components";
import styles from "../../modules/ProductsPage/ProductPage.module.scss";
import {HavePlatform, JustHeader, ProductLayout1, ProductLayout2} from "../../modules/ProductsPage";
import Head from "next/head";
// import Script from "next/script";

export default function Creators() {
    return (
        <>
          <Head>
            <title>edekee | For Creators </title>
            <link rel="preconnect" href="https://d3t7szus8c85is.cloudfront.net"/>
            <link rel="preload" as="image" href="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/creator_value.png"/>
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
                    preload="auto" auto={1}
                    poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/creator_value.png"
                    video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/creator_value.mp4"
                    heading1="Add more value to" heading2="your videos"
                    body={<>Allow your videos to be monetised and earn as a content producer by creating creative videos
                        using products from businesses.</>}/>
                <JustHeader header="How to do this"/>
                <ProductLayout2
                    poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/creator_product.png"
                    video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/creator_product.mp4"
                    heading1="Tag " heading2="products in your videos."
                    body={<>Click the <span className="globalTextDark100"> &quot;create video&quot;</span> option to
                        upload a pre-made video or to record one with items from your favorite brand. Post it to make
                        your creative idea seen.</>}/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <ProductLayout1
                    auto={1}
                    preload="none"
                    poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/imagescreator_service.png"
                    video="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/creator_service.mp4"
                    heading1="Tag services  " heading2="in your video"
                    body={<>Click the <span className="globalTextDark100">&quot;create video&quot;</span>option to
                        upload a pre-made video or to record one with your favorite service experience and location.
                        Share it so that others can benefit from your experience..</>}/>
                {/* <WhatElse/> */}
                <HavePlatform/>
            </div>
            <Footer/>
          {/* <Script strategy="lazyOnload"
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`} />
  
          {/* eslint-disable-next-line @next/next/inline-script-id */}
          {/* <Script strategy="lazyOnload">
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