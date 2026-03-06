"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/components/ui/button";
import { useCart } from "hooks/useCart";
import { useRouter } from "next/navigation";

export default function CartClient() {
  const params = useSearchParams();
  const [cart, setCart] = useState<any[]>([]);
  const { addItem, handleCartClick } = useCart();
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie;

    if (!cookies.includes("auth")) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const dataParam = params.get("data");
    if (!dataParam) return;

    try {
      const decodedURIComponent = decodeURIComponent(dataParam);
      const decodedBase64 = atob(decodedURIComponent);
      const parsed = JSON.parse(decodedBase64);

      if (Array.isArray(parsed)) {
        setCart(parsed);
      }
    } catch (err) {
      console.error("Error decoding cart data:", err);
    }
  }, [params]);

  if (cart.length === 0) {
    return (
      <div className="mt-20 text-center text-gray-500">No items to show.</div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleAddAllToCart = () => {
    cart.forEach((item) => {
      addItem(item);
    });

    handleCartClick();
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Shared Cart</h1>

      <ul className="divide-y divide-gray-200">
        {cart.map((item) => (
          <li key={item.id} className="py-6 flex">
            <div className="h-24 w-24 overflow-hidden rounded-md border">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium">
                <p>{item.name}</p>
                <p>{item.price} Birr</p>
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Quantity: {item.quantity}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t pt-6 mt-6">
        <div className="flex justify-between text-base font-medium">
          <p>Subtotal</p>
          <p className="font-bold">ETB {total} Birr</p>
        </div>
      </div>

      <Button
        className="mt-4 w-full bg-purple-500 text-white hover:bg-purple-600"
        onClick={handleAddAllToCart}
      >
        Add All to My Cart
      </Button>
    </div>
  );
}
