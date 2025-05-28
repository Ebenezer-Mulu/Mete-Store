"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const pathname = usePathname();
  const category = pathname.split("/").pop();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`/api/product/${category}`);
      const data = await res.json();
      setProducts(data);
    }
    if (category) fetchProducts();
  }, [category]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mt-4 tracking-tight text-gray-900">
            Products for {category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
          {products.map((product: any) => (
            <div key={product.id} className="group relative">
              <Link href={`/pages/product/${product.slug}`}>
                <div className="aspect-square w-full shadow-sm overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-4 flex flex-col ml-2 gap-2 justify-between">
                  <div>
                    <h3 className="text-sm text-gray-400">
                      {product.name.split(" ").slice(0, 3).join(" ")}
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    ETB {product.price} Birr
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
