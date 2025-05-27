import { Hero } from "./components/hero";
import Newest from "./components/items/Newest";
import SunGlasses from "./components/items/sunglasses";
import Watches from "./components/items/watches";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <SunGlasses />
      <Watches />
      
    </div>
  );
}
