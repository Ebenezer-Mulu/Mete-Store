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


import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";

/**
 * GET products by category name
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { category: string } }
) {
  const categoryName = params.category;

  try {
    const result = await sql`
      SELECT p.*, c.name as category_name
      FROM product p
      JOIN category c ON p.category_id = c.id
      WHERE c.name = ${categoryName}
      ORDER BY p.created_at DESC;
    `;

    return new Response(JSON.stringify(result.rows), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Failed to fetch products", { status: 500 });
  }
}

/**
 * POST new product under category
 */
export async function POST(req: NextRequest) {
  try {
    // Extract category name from the pathname
    const pathname = req.nextUrl.pathname; // e.g., /api/product/EyeGlasses
    const segments = pathname.split("/");
    const categoryName = segments[segments.length - 1];

    const body = await req.json();

    // Get the category by name
    const categoryResult = await sql`
      SELECT id FROM category WHERE name = ${categoryName};
    `;

    if (categoryResult.rowCount === 0) {
      return new Response(`Category '${categoryName}' not found`, {
        status: 404,
      });
    }

    const categoryId = categoryResult.rows[0].id;

    // Insert the new product
    const productResult = await sql`
      INSERT INTO product (
        name,
        slug,
        price,
        description,
        image,
        category_id,
        created_at
      ) VALUES (
        ${body.name},
        ${body.slug},
        ${body.price},
        ${body.description},
        ${JSON.stringify(body.image)},
        ${categoryId},
        NOW()
      )
      RETURNING *;
    `;

    return new Response(JSON.stringify(productResult.rows[0]), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response("Failed to create product", { status: 500 });
  }
}



// CREATE TABLE category (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL UNIQUE
// );

// CREATE TABLE product (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL,
//   slug TEXT NOT NULL UNIQUE,
//   price NUMERIC NOT NULL,
//   description TEXT,
//   image JSONB, -- For storing arrays of image URLs
//   category_id INTEGER REFERENCES category(id),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
