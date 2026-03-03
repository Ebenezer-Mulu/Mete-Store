import ProductsClient from "app/components/admin/productsClient";
import prisma from "app/lib/prisma";
export const revalidate = 0;

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  const categories = await prisma.category.findMany();

  return <ProductsClient products={products} categories={categories} />;
}
