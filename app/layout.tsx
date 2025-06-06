import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { CartProvider } from "context/cartContext";
import ShoppingCartModal from "./components/shoppingCartModal";
import { Roboto } from "next/font/google";

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
