import { Hero } from "./components/hero";
import Newest from "./components/items/Newest";
import ProductsByCategory from "./components/items/productByCategory";

import "./globals.css";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <ProductsByCategory />
 
      
    </div>
  );
}
