"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";
import { Button } from "@/components/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/components/ui/drawer";
import { IoClose } from "react-icons/io5";

const links = [
  { name: "Home", href: "/" },
  { name: "SunGlasses", href: "/pages/SunGlasses" },
  { name: "Watches", href: "/pages/Watches" },
   { name: "Earing", href:"/pages/Earing"},
  { name: "Rings", href: "/pages/Rings" },
  { name: "Jackets", href:"/pages/Jackets"},
  { name: "Contact us", href: "/pages/contact_us" },
  // { name: "Shoes", href: "/pages/Shoes" },
  // { name: "Coats ", href: "/pages/Coats" },
  // { name: "Hoodie", href: "/pages/Hoodie" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { handleCartClick } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="relative flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-4 lg:max-w-7xl w-full h-15">
        <div className="z-10">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent
              className="fixed left-0 top-0 h-full w-3/4 lg:w-80 max-w-xs bg-white shadow-lg z-50 rounded-none flex flex-col"
              style={{ animation: "slideInLeft 0.3s ease-out" }}
            >
              <DrawerHeader>
                <DrawerTitle className="flex flex-row justify-between items-center">
                  <DrawerClose asChild>
                    <IoClose />
                  </DrawerClose>
                  <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold text-center">
                      Mete <span className="text-purple-700">Store</span>
                    </h1>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleCartClick}
                    className="flex flex-col gap-y-1.5 h-5 w-5 justify-center sm:h-20 sm:w-20 md:h-20 md:w-20 rounded-none border-none"
                  >
                    <ShoppingBag />
                    <div className="hidden text-xs font-semibold text-gray-500 sm:block">
                      Cart
                    </div>
                  </Button>
                </DrawerTitle>
                <DrawerDescription className="text-center text-gray-500">
                  Where Style Meet&apos;s Fashion
                </DrawerDescription>
              </DrawerHeader>

              <div className="flex-1 overflow-y-auto px-4 py-2">
                <nav className="flex flex-col gap-4">
                  {links.map((link, idx) => (
                    <DrawerClose asChild key={idx}>
                      <Link
                        href={link.href}
                        className={`text-lg font-medium ml-2 rounded-sm p-1 ${
                          pathname === link.href
                            ? "text-purple-700"
                            : "text-gray-600 hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </DrawerClose>
                  ))}
                </nav>
              </div>

              {/* Footer pinned to bottom */}
              <div className="mt-auto border-t border-gray-200 text-center text-sm py-4 bg-gray-50">
                <p>
                  © {new Date().getFullYear()} Mete Store. All rights reserved.
                </p>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Mete <span className="text-purple-700">Store</span>
            </h1>
          </Link>
        </div>

        <div className="z-10">
          <Button
            variant="outline"
            onClick={handleCartClick}
            className="flex flex-col gap-y-1.5 h-5 w-5 justify-center sm:h-20 sm:w-20 md:h-20 md:w-20 rounded-none border-none"
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
