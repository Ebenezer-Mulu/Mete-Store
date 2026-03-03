import { NextResponse } from "next/server";

export function middleware(req: any) {
  const auth = req.cookies.get("auth");

  const path = req.nextUrl.pathname;

  const protectedRoutes = ["/admin", "/cart", "/share"];

  // Allow login page access
  if (path === "/login" || path === "/register") {
    return NextResponse.next();
  }

  if (!auth && protectedRoutes.some(r => path.startsWith(r))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/cart/:path*", "/share/:path*", "/login", "/register"],
};