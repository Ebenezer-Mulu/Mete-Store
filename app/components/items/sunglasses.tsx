import prisma from "app/lib/prisma";
import Link from "next/link";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Sunglasses = async () => {
  const sunglasses = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
    where: {
      category: { name: "SunGlasses" },
    },
  });
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our SunGlasses 
          </h2>
          <Link
            className="text-primary flex items-center gap-x-1"
            href="/pages/SunGlasses"
          >
            See All <ArrowRight />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sunglasses.map((product) => (
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
};

export default Sunglasses;
