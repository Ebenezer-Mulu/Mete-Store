"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/components/ui/sheet";
import { useCart } from "../../hooks/useCart";
import Image from "next/image";
import { Button } from "@/components/components/ui/button";
import { Trash2, Minus, Plus, Share2 } from "lucide-react";
import Link from "next/link";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    toggleCart,
    cartDetails,
    updateItemQuantity,
    removeItem,
    total,
  } = useCart();

  const handleShare = async () => {
    if (!cartDetails || cartDetails.length === 0) {
      alert("Cart is empty");
      return;
    }

    const res = await fetch("/api/shared-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartDetails }),
    });

    const result = await res.json();

    if (!res.ok) {
      alert("❌ Failed to share: " + result.error);
    } else {
      alert("✅ Cart link sent to Telegram!");
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={(open) => toggleCart(open)}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader className="flex flex-row justify-between items-center">
          <SheetTitle>Shopping Cart</SheetTitle>
          <div className="flex items-center space-x-4">
            {/* Tooltip Wrapper */}
            <div className="relative group">
              <Share2
                className="mr-8 w-4 h-4 text-gray-600 cursor-pointer "
                onClick={handleShare}
              />

              {/* Tooltip */}
              <div className="absolute mt-5 mr-12 -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
                Share
              </div>
            </div>
          </div>
        </SheetHeader>

        <div
          id="cart-content"
          className="flex flex-col h-[calc(100vh-5rem)] cart-content"
        >
          {" "}
          <div className="flex-1 overflow-y-auto mt-4">
            <ul className="divide-y divide-gray-200 px-2">
              {cartCount === 0 ? (
                <h1 className="py-6 text-center">You don’t have any items</h1>
              ) : (
                <>
                  {cartDetails.map((entry) => (
                    <li key={entry.id} className="py-6 flex">
                      <div className="h-24 w-24 ml-5 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image}
                          alt={entry.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          {entry.name.split(" ").slice(0, 3).join(" ")}
                          <p className="mr-8">{entry.price} Birr</p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500 mb-1">Quantity</p>
                          <div className="flex items-center space-x-2">
                            {entry.quantity === 1 ? (
                              <Trash2
                                className="w-6 h-6 p-1 rounded-full bg-red-100 text-red-500 hover:bg-red-200 cursor-pointer transition"
                                onClick={() => removeItem(entry.id)}
                              />
                            ) : (
                              <Minus
                                className="w-6 h-6 p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer transition"
                                onClick={() =>
                                  entry.quantity > 1 &&
                                  updateItemQuantity(
                                    entry.id,
                                    entry.quantity - 1
                                  )
                                }
                              />
                            )}
                            <span className="text-sm font-medium text-gray-700">
                              {entry.quantity}
                            </span>
                            <Plus
                              className="w-6 h-6 p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer transition"
                              onClick={() =>
                                updateItemQuantity(entry.id, entry.quantity + 1)
                              }
                            />
                          </div>

                          <div className="mr-5 flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-purple-300 hover:text-purple-900/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          {/* Fixed footer */}
          <div className="border-t border-gray-200 px-4 py-2 sm:px-2 bg-white">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p className="font-bold">ETB {total} Birr</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are Calculated at Checkout
            </p>
            <div className="mt-2">
              <Button
                onClick={() => toggleCart(false)}
                className="w-full bg-purple-400 hover:text-purple-100"
              >
                <Link href="/pages/checkout">Checkout</Link>
              </Button>
            </div>
            <div className=" flex justify-center text-center text-sm text-gray-500">
              <p>
                <strong>OR </strong>
                <button
                  onClick={() => toggleCart(false)}
                  className="font-medium text-purple-800 hover:text-purple-400"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
