"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../globals.css";
import { Button } from "@/components/components/ui/button";
import { ShoppingBag, Menu, LogOut } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/components/ui/drawer";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { handleCartClick } = useCart();

  const [categories, setCategories] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetch categories
  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  // Auth check
  useEffect(() => {
    const cookies = document.cookie;

    const auth = cookies.includes("auth");
    setIsLoggedIn(auth);
  }, [pathname]);

  // Logout
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/");
    window.location.reload();
  };

  // Cart click logic
  const handleCartRedirect = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    router.push("/cart");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="relative flex items-center justify-between mx-auto max-w-7xl px-4 h-16">
        {/* LEFT DRAWER */}
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="fixed left-0 top-0 h-full w-3/4 lg:w-80 max-w-xs bg-white shadow-lg rounded-none flex flex-col">
            <DrawerHeader>
              <DrawerTitle className="flex justify-between items-center">
                <DrawerClose asChild>
                  <IoClose className="cursor-pointer" />
                </DrawerClose>

                <Link href="/">
                  <h1 className="text-2xl font-bold">
                    Mete <span className="text-purple-700">Store</span>
                  </h1>
                </Link>
              </DrawerTitle>

              <DrawerDescription className="text-center text-gray-500">
                Where Style Meets Fashion
              </DrawerDescription>
            </DrawerHeader>

            {/* NAV LINKS */}
            <div className="flex-1 overflow-y-auto px-4 py-2">
              <nav className="flex flex-col gap-4">
                <DrawerClose asChild>
                  <Link
                    href="/"
                    className={`text-lg font-medium ${
                      pathname === "/"
                        ? "text-purple-700"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    Home
                  </Link>
                </DrawerClose>

                {categories.map((cat: any) => (
                  <DrawerClose asChild key={cat.id}>
                    <Link
                      href={`/${cat.slug || cat.name}`}
                      className="text-lg font-medium text-gray-600 hover:text-purple-600"
                    >
                      {cat.name}
                    </Link>
                  </DrawerClose>
                ))}
              </nav>
            </div>

            <div className="mt-auto border-t text-center text-sm py-4 bg-gray-50">
              © {new Date().getFullYear()} Mete Store
            </div>
          </DrawerContent>
        </Drawer>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              Mete <span className="text-purple-700">Store</span>
            </h1>
          </Link>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">
          {/* LOGIN */}
          {!isLoggedIn && (
            <Button variant="outline" onClick={() => router.push("/login")}>
              Login
            </Button>
          )}

          {/* CART ALWAYS VISIBLE */}
          <Button
            variant="outline"
            onClick={handleCartRedirect}
            className="flex items-center gap-2"
          >
            <ShoppingBag />

            <span className="hidden sm:block text-xs font-semibold text-gray-500">
              Cart
            </span>
          </Button>

          {/* LOGOUT */}
          {isLoggedIn && (
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut />

              <span className="hidden sm:block text-xs font-semibold text-gray-500">
                Logout
              </span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
