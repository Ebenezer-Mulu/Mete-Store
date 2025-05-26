// app/components/ShoppingCartModal.tsx
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
import { Trash2, Minus, Plus } from "lucide-react";
import Link from "next/link";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    toggleCart,
    cartDetails,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={(open) => toggleCart(open)}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don’t have any items</h1>
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
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="mr-8">{entry.price} Birr</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
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
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>total Birr</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are Calculated at Checkout
            </p>
            <div className="mt-6">
              <Button
                onClick={() => toggleCart(false)}
                className="w-full  bg-purple-400 hover:text-purple-100"
              >
                <Link href="/pages/checkout"> Checkout</Link>
              </Button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
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
