"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/components/ui/button";
import { useCart } from "hooks/useCart";

export default function CartClient() {
  const params = useSearchParams();
  const [cart, setCart] = useState<any[]>([]);
  const { addItem, handleCartClick } = useCart();

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
      <div className="mt-20 text-center text-gray-500">
        No items to show. Check console logs above.
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleAddAllToCart = () => {
    cart.forEach((item) => {
      addItem(item); // this assumes each item matches your cart schema
    });
    handleCartClick(); // open the cart modal
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Shared Cart</h1>
      <ul className="divide-y divide-gray-200">
        {cart.map((item) => (
          <li key={item.id} className="py-6 flex">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>{item.name}</p>
                <p>{item.price} Birr</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p className="font-bold">ETB {total} Birr</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Shipping and taxes are calculated at checkout.
        </p>
      </div>

      <Button
        className="mt-4 w-full bg-purple-400 text-white hover:bg-purple-500"
        onClick={handleAddAllToCart}
      >
        Add All to My Cart
      </Button>
    </div>
  );
}
