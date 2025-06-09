"use client";
import { Button } from "@/components/components/ui/button";
import { useCart } from "hooks/useCart";
import Link from "next/link";
import React from "react";

export interface ProductCart {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}
const AddToBag = ({
  id,
  name,
  description,
  price,
  currency,
  image,
}: ProductCart) => {
  const { addItem, handleCartClick } = useCart();
  const product = {
    id: id,
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
    quantity: 1,
  };
  return (
    <>
      <Button
        className=" bg-purple-400 text-white"
        onClick={() => {
          addItem(product), handleCartClick();
        }}
      >
        Add To Cart
      </Button>
      <Button
        className="bg-red-400 text-white"
        onClick={() => {
          addItem(product), handleCartClick();
        }}
      >
        <Link href="/checkout">CheckOut Now</Link>
      </Button>
    </>
  );
};

export default AddToBag;
