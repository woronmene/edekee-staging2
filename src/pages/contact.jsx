import Head from "next/head";
import dynamic from "next/dynamic";
import { ContactMod } from "../modules/ContactPage";
import Script from "next/script";

const DynamicFooter = dynamic(
  () => import("../common/components/Footer/Footer"),
  { ssr: false }
);

export default function Contact() {
  return (
    <div>
      <Head>
        <title>edekee</title>
        <meta name="description" content="Edekee Website" />
        <link rel="preconnect" href="https://d3t7szus8c85is.cloudfront.net" />
        <link
          rel="preload"
          as="image"
          href="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/images/contact.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/72x72.png"
        />

        <link rel="icon" href="/edekee_favicon.svg" />
      </Head>

      <main>
        <div>
          <ContactMod />
          <DynamicFooter
            style={{ position: "absolute", zIndex: "2" }}
            color="transparent"
          />
        </div>
      </main>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`} />
  
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
     
    </div>
  );
}
