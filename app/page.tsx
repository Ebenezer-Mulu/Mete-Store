import { Hero } from "./components/hero";
import Newest from "./components/items/Newest";
import Sunglasses from "./components/items/sunglasses";
import "./globals.css";

export default function Home() {

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-">
      <Hero />
      <Newest />
      <Sunglasses />
    </div>
  );
}
