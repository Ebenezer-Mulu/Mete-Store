"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";
import { Button } from "../../@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../hooks/useCart";

const links = [
  { name: "Home", href: "/" },
  { name: "EyeGlasses", href: "/pages/SunGlasses" },
  { name: "Watches", href: "/pages/Watches" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { handleCartClick } = useCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-4 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Mete <span className="text-purple-700">Store</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname == link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-purple-700"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-grey-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex  ">
          <Button
            variant="outline"
            onClick={handleCartClick}
            className="flex flex-col gap-y-1.5 h-5 w-5 justify-center sm:h-20 sm:w-20 md:h-20 md:w-20 rounded-none border-none "
          >
            <ShoppingBag />
            <div className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
