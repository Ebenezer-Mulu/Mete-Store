import Image from "next/image";
import Link from "next/link";
import React from "react";
import prisma from "app/lib/prisma";
export default async function Newest() {
  // Fetch products from the database
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
    include: {
      category: true,
    },
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link href={`/pages/product/${product.slug}`} passHref>
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category?.name}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price} Birr
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
