import prisma from "app/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { category: string } }
) {
  const categoryName = params.category;
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      where: {
        category: {
          name: categoryName,
        },
      },

      include: { category: true },
    });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Failed to fetch products", { status: 500 });
  }
}
