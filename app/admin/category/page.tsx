import CategoriesClient from "app/components/admin/categoryClient";
import prisma from "app/lib/prisma";
export const revalidate = 0;


export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "desc" },
  });

  return <CategoriesClient categories={categories} />;
}
