import prisma from "app/lib/prisma";
import Link from "next/link";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/components/ui/button";

const Watches = async () => {
  const sunglasses = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
    where: {
      category: { name: "Watches" },
    },
  });
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Watches
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sunglasses.map((product) => (
            <div key={product.id} className="group relative">
              <Link href={`/pages/product/${product.slug}`} passHref>
                <div className="aspect-square shadow-sm w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-4 flex flex-col gap-2 ml-2  justify-between">
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
      <div className="flex justify-center mt-6">
        <Button className="bg-white hover:bg-purple-100  text-white px-6 py-2  shadow-lg ">
          <Link
            href="/pages/SunGlasses"
            className="flex items-center gap-x-2 text-black"
          >
            View All
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Watches;
