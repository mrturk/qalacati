import MainLayout from "@/components/layouts/MainLayout";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: {
    template: "%s | Q Alaçatı",
    default: "Q Alaçatı",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Mobile Specific Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {/* Stylesheets */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/css/flaticon.css" />
        {/* Animate */}
        <link rel="stylesheet" href="/css/animate.css" />
        {/* Bootsnav */}
        <link rel="stylesheet" href="/css/bootsnav.css" />
        {/* Color style */}
        <link rel="stylesheet" href="/css/color.css" />
        {/* Custom stylesheet */}
        <link rel="stylesheet" href="/css/custom.css" />
        {/*[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>  
          <![endif]*/}
      </head>
      <body data-spy="scroll" data-target="#navbar-menu" data-offset="100">
        <MainLayout>{children}</MainLayout>

        <Script
          strategy="afterInteractive"
          src="http://code.jquery.com/jquery-1.12.1.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
        />
        {/* <Script
          strategy="afterInteractive"
          src="http://maps.google.com/maps/api/js?sensor=true"
        />
        <Script strategy="afterInteractive" src="/js/gmaps.min.js" />
        <Script strategy="afterInteractive" src="/js/mapscript.js" /> */}
        <Script strategy="afterInteractive" src="/js/bootsnav.js" />
        <Script strategy="afterInteractive" src="/js/main.js" />
      </body>
    </html>
  );
}
