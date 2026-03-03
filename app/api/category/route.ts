import prisma from "app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: "asc" },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;

    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    const categoryName = name.trim();

    const exists = await prisma.category.findUnique({
      where: { name: categoryName },
    });

    if (exists) {
      return NextResponse.json(
        { error: "Category already exists" },
        { status: 400 }
      );
    }

    await prisma.category.create({
      data: { name: categoryName },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}