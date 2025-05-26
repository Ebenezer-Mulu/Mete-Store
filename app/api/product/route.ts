 import { PrismaClient } from "@prisma/client";
 import { NextRequest } from "next/server";

// const prisma = new PrismaClient();

// // Helper function to generate slug
// function generateSlug(name: string) {
//   return name
//     .toLowerCase()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .trim()
//     .replace(/\s+/g, "-");
// }

// // POST: Create a new product
// export async function POST(request: Request) {
//   const body = await request.json();

//   try {
//     const slug = generateSlug(body.name);
//     const images = Array.isArray(body.image) ? body.image : [body.image];

//     const newProduct = await prisma.product.create({
//       data: {
//         name: body.name,
//         slug,
//         description: body.description,
//         image: images,
//         price: body.price,
//         createdAt: new Date(),
//         categoryId: body.categoryId,
//       },
//     });

//     return new Response(JSON.stringify(newProduct), {
//       headers: { "Content-Type": "application/json" },
//       status: 201,
//     });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     return new Response(JSON.stringify({ error: "Failed to create product" }), {
//       headers: { "Content-Type": "application/json" },
//       status: 500,
//     });
//   }
// }


import { sql } from "@vercel/postgres";

// Helper function to generate slug
function generateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// POST: Create a new product
export async function POST(request: Request) {
  const body = await request.json();

  try {
    const slug = generateSlug(body.name);
    const images = Array.isArray(body.image) ? body.image : [body.image];

    const result = await sql`
      INSERT INTO product (
        name,
        slug,
        description,
        image,
        price,
        created_at,
        category_id
      )
      VALUES (
        ${body.name},
        ${slug},
        ${body.description},
        ${JSON.stringify(images)},
        ${body.price},
        NOW(),
        ${body.categoryId}
      )
      RETURNING *;
    `;

    return new Response(JSON.stringify(result.rows[0]), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}


// CREATE TABLE product (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL,
//   slug TEXT UNIQUE NOT NULL,
//   description TEXT,
//   image JSONB, -- Storing an array of image URLs
//   price NUMERIC NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   category_id INTEGER REFERENCES category(id)
// );
