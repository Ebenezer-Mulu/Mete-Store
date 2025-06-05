// app/pages/cart.tsx or app/cart/page.tsx
"use client";


import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/components/ui/button";
import { useCart } from "hooks/useCart";

export default function CartPage() {
  const {
    cartCount,
    cartDetails,
    updateItemQuantity,
    removeItem,
    total,
  } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartCount === 0 ? (
        <p className="text-center">You don’t have any items.</p>
      ) : (
        <ul className="space-y-6">
          {cartDetails.map((entry) => (
            <li key={entry.id} className="flex items-start space-x-4">
              <Image src={entry.image} alt={entry.name} width={100} height={100} />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{entry.name}</h2>
                <p className="text-sm text-gray-500">{entry.description}</p>
                <p className="font-medium text-purple-600 mt-1">{entry.price} Birr</p>

                <div className="flex items-center mt-2 space-x-2">
                  {entry.quantity === 1 ? (
                    <Trash2
                      className="w-6 h-6 text-red-500 cursor-pointer"
                      onClick={() => removeItem(entry.id)}
                    />
                  ) : (
                    <Minus
                      className="w-6 h-6 text-gray-600 cursor-pointer"
                      onClick={() =>
                        updateItemQuantity(entry.id, entry.quantity - 1)
                      }
                    />
                  )}
                  <span>{entry.quantity}</span>
                  <Plus
                    className="w-6 h-6 text-gray-600 cursor-pointer"
                    onClick={() =>
                      updateItemQuantity(entry.id, entry.quantity + 1)
                    }
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>ETB {total} Birr</span>
        </div>

        <div className="mt-4 flex gap-4">
          <Link href="/pages/checkout">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
              Checkout
            </Button>
          </Link>
          <Button
            className="bg-gray-200 hover:bg-gray-300 w-full"
            onClick={() => window.location.href = "/"}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
