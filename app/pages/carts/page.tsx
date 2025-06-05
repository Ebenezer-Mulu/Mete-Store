
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/components/ui/button";

// Simulated fetch function (you'd replace this with your actual API call)
const fetchProductsByIds = async (items: { id: string; quantity: number }[]) => {
  // Example static product list for demo purposes
  const allProducts = [
    { id: "1", name: "T-shirt", price: 300, image: "/tshirt.jpg", description: "100% Cotton T-Shirt" },
    { id: "2", name: "Cap", price: 100, image: "/cap.jpg", description: "Cool Cap" },
    { id: "3", name: "Shoes", price: 600, image: "/shoes.jpg", description: "Running Shoes" },
  ];

  return items.map(({ id, quantity }) => {
    const product = allProducts.find((p) => p.id === id);
    return product ? { ...product, quantity } : null;
  }).filter(Boolean);
};

export default function SharedCartPage() {
  const params = useSearchParams();
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = params.get("data");
    if (!data) return;

    try {
      const parsed = JSON.parse(decodeURIComponent(data));
      fetchProductsByIds(parsed).then(setCart);
    } catch (err) {
      console.error("Invalid cart data.", err);
    }
  }, [params]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">🛒 Shared Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">No items to show.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {cart.map((item) => (
            <li key={item.id} className="flex py-4 space-x-4">
              <Image
                src={item.image}
                width={80}
                height={80}
                alt={item.name}
                className="rounded border"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p>
                  Quantity: <strong>{item.quantity}</strong>
                </p>
                <p>
                  Total: <strong>{item.price * item.quantity} Birr</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="mt-6 text-right">
          <p className="text-lg font-bold">Total: ETB {total} Birr</p>
          <Link href="/pages/checkout">
            <Button className="mt-4 bg-purple-500 text-white">Go to Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
