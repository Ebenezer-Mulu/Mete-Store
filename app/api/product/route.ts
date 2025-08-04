import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

import prisma from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description,
        price: body.price,
        status: body.status,
        image: body.image, // array of strings
        categoryId: parseInt(body.categoryId),
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

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
