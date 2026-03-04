import prisma from "app/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(_, { params }) {
  try {
    const categoryName = params.category;

    const products = await prisma.product.findMany({
      where: {
        category: {
          name: {
            equals: categoryName,
            mode: "insensitive",
          },
        },
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(products);
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
