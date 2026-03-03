import prisma from "app/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({
    success: true,
    role: user.role, // ⭐ VERY IMPORTANT
  });

  response.cookies.set("auth", user.id.toString(), {
    httpOnly: false,
    path: "/",
    sameSite: "lax",
  });

  response.cookies.set("role", user.role, {
    httpOnly: false,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
