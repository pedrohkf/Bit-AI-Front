import HomePage from "./homePage/page";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5RFJH56K92" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5RFJH56K92');
        `}
      </Script>
      <div>
        <HomePage />
      </div>
    </>
  );
}
