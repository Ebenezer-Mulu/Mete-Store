import prisma from "app/lib/prisma";
import Link from "next/link";
import Image from "next/image";

const ProductsByCategory = async () => {
  const categories = await prisma.category.findMany();

  // Fetch 4 products for each category
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
    })
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {categoryProducts.map(({ category, products }) => (
          <div key={category.id} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {category.name}
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.slug}`} passHref>
                    <div className="aspect-square w-full shadow-sm overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="mt-4 flex flex-col ml-2 gap-2 justify-between">
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
                href={`/pages/${category.name}`}
                className="inline-block border-2 border-black text-black hover:bg-purple-100 px-6 py-2 rounded"
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
