import prisma from "app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const { name, slug, description, price, stock, categoryId, images } = body;

  const existing = await prisma.product.findUnique({
    where: { slug },
  });

  if (existing) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
  }

  const cleanImages = images?.filter(
    (img: string) => img && img !== null && img !== undefined,
  );

  const product = await prisma.product.create({
    data: {
      name,
      slug,
      description,
      price,
      stock,
      categoryId,
      image: cleanImages,
    },
  });

  return NextResponse.json(product);
}
