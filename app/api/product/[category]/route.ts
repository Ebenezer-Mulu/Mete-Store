// import { NextRequest } from "next/server";
// import prisma from "app/lib/prisma";

// /**
//  * GET products by category name
//  */
// export async function GET(
//   req: NextRequest,
//   { params }: { params: { category: string } }
// ) {
//   const categoryName = params.category;

//   try {
//     const products = await prisma.product.findMany({
//       orderBy: { createdAt: "desc" },
//       where: {
//         category: {
//           name: categoryName,
//         },
//       },
//       include: {
//         category: true,
//       },
//     });

//     return new Response(JSON.stringify(products), { status: 200 });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return new Response("Failed to fetch products", { status: 500 });
//   }
// }

// /**
//  * POST new product under category
//  */
// export async function POST(req: NextRequest) {
//   try {
//     // Extract category from pathname
//     const pathname = req.nextUrl.pathname; // /api/product/EyeGlasses
//     const segments = pathname.split("/");
//     const categoryName = segments[segments.length - 1];

//     const body = await req.json();

//     // Get category
//     const category = await prisma.category.findUnique({
//       where: { name: categoryName },
//     });

//     if (!category) {
//       return new Response(`Category '${categoryName}' not found`, {
//         status: 404,
//       });
//     }

//     // Create product
//     const newProduct = await prisma.product.create({
//       data: {
//         name: body.name,
//         slug: body.slug,
//         price: body.price,
//         description: body.description,
//         image: body.image,
//         categoryId: category.id,
//       },
//     });

//     return new Response(JSON.stringify(newProduct), { status: 201 });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     return new Response("Failed to create product", { status: 500 });
//   }
// }

import prisma from "app/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { category: string } }
) {
  const categoryName = params.category;

  try {
    const products = await prisma.product.findMany({
      where: {
        category: {
          name: {
            equals: categoryName,
            mode: "insensitive",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
      },
    });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Failed to fetch products", { status: 500 });
  }
}
