import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Helper function to generate slug from name
function generateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const slug = generateSlug(body.name); // generate slug from name

    const images = Array.isArray(body.image) ? body.image : [body.image]; // Wrap single image into an array if not already an array

    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        slug: slug,
        description: body.description,
        image: images,
        price: body.price,
        createdAt: new Date(),
        categoryId: body.categoryId,
      },
    });

    return new Response(JSON.stringify(newProduct), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}

// Adjust the path based on your project structure

export async function GET({ pathname }) {
  try {
    // Fetch products from the database
    const products = await prisma.product.findMany({
      where: {
        category: pathname,
      },
    });

    // Return the product data in the response
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Error fetching products", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
