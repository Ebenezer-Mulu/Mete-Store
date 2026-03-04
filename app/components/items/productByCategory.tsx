import prisma from "app/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const ProductsByCategory = async () => {
  const categories = await prisma.category.findMany();

  const categoryProducts = await Promise.all(
    categories.map(async (category) => {
      const products = await prisma.product.findMany({
        where: {
          categoryId: category.id,
        },
        orderBy: { createdAt: "desc" },
        take: 4,
      });

      return { category, products };
    }),
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8">
        {categoryProducts.map(({ category, products }) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold font-semibold text-gray-900 mb-4">
              {category.name}
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.slug}`}>
                    <div className="aspect-square w-full shadow-sm overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
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

            <div className="flex justify-center mt-6">
              <Link
                href={`/${category.name}`}
                className="border-2 border-black text-black hover:bg-purple-100 px-6 py-2 rounded"
              >
                View All
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
