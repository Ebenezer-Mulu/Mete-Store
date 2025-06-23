"use client";

import { useState } from "react";
import ImageGallery from "app/components/imageGallery";
import { Button } from "@/components/components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToBag from "app/components/addToBag";

export interface ProductPageClientProps {
  product: {
    id: number;
    slug: string;
    price: number;
    description: string;
    name: string;
    image: string | string[];
    category: { id: number; name: string };
  };
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const rating = Math.round((Math.random() * (4.9 - 4.3) + 4.3) * 10) / 10;
  const numberOfRater = Math.floor(Math.random() * 41) + 60;

  const images = Array.isArray(product.image) ? product.image : [product.image];
  const formattedImages = images.map((url) => ({ url, alt: product.name }));

  const [selectedImage, setSelectedImage] = useState(formattedImages[0]);

  return (
    <div className="bg-white mt-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery
            images={formattedImages}
            selectedImage={selectedImage}
            onSelectImage={setSelectedImage}
          />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.category.name}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2 bg-purple-300">
                <span className="text-sm">{rating}</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500">
                {numberOfRater} Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  {product.price} Birr
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  {product.price + 200} Birr
                </span>
              </div>
              <span className="text-sm text-gray-500">Inclusive Shipping</span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">15 days shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                id={product.id}
                currency="Birr"
                description={product.description}
                name={product.name}
                image={selectedImage.url}
                price={product.price}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
