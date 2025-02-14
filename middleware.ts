import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (currentUser && request.nextUrl.pathname.startsWith("/admin")) {
    // Check user role here. This is a simplified example.
    const userRole = JSON.parse(currentUser).role
    if (userRole !== "admin") {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
}

