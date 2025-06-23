import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { CartProvider } from "context/cartContext";
import ShoppingCartModal from "./components/shoppingCartModal";
import { Roboto } from "next/font/google";
import Script from "next/script";

export const metadata = {
  title: "Mete Store",
  description: "Stylish Accessories for Everyone!",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        {/* ✅ GA Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-QTF7XN47H8`}
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-QTF7XN47H8'); 
          `}
        </Script>
      </head>
      <body>
        <CartProvider>
          <NavBar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
