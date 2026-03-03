import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "../footer";
import { CartProvider } from "context/cartContext";
import ShoppingCartModal from "./components/shoppingCartModal";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata = {
  title: "Mete Store",
  description: "Stylish Accessories for Everyone!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QTF7XN47H8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QTF7XN47H8');
          `}
        </Script>

        <CartProvider>
          <NavBar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProvider>

       
        <Analytics />
      </body>
    </html>
  );
}
