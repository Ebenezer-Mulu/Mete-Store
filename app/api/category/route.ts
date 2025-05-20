import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const newCategory = await prisma.category.create({
      data: {
        name: body.name,
      },
    });

    return new Response(JSON.stringify(newCategory), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create category" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
}
