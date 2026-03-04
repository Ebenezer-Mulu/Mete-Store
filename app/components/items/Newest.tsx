import Image from "next/image";
import Link from "next/link";
import prisma from "app/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Newest() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
  });

  const products = categories
    .map((category) => category.products[0])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold font-semibold text-gray-900">
          Newest Products
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 shadow-sm group-hover:opacity-75">
                  <Image
                    src={product.image?.[0] || "/placeholder.png"}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                <div className="mt-4 flex flex-col ml-2 gap-2">
                  <h3 className="text-sm text-gray-400">
                    {product.name.split(" ").slice(0, 3).join(" ")}
                  </h3>

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
