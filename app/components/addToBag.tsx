"use client";
import { Button } from "@/components/components/ui/button";
import { useCart } from "hooks/useCart";
import React from "react";

export interface ProducctCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}
const AddToBag = ({
  name,
  description,
  price,
  currency,
  image,
}: ProducctCart) => {
  const { addItem, handleCartClick } = useCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
  };
  return (
    <Button
      className=" bg-purple-400 text-white"
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToBag;
