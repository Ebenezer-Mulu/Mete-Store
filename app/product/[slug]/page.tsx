// file: app/product/[slug]/page.tsx
import { notFound } from "next/navigation";
import prisma from "app/lib/prisma";
import ProductPageClient from "../ProductPageClient/page";


export async function generateStaticParams() {
  const products = await prisma.product.findMany({ select: { slug: true } });
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPageServer({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    select: {
      id: true,
      slug: true,
      price: true,
      description: true,
      name: true,
      image: true,
      category: { select: { id: true, name: true } },
    },
  });

  if (!product) notFound();

  return <ProductPageClient product={product} />;
}
