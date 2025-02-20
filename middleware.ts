import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verify } from "jsonwebtoken"

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined")
}

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Get the token from the cookies
  const token = request.cookies.get("auth-token")?.value

  // Define public paths that don't require authentication
  const publicPaths = ["/", "/login", "/signup", "/signup-confirmation"]

  // Check if the path is public
  const isPublicPath = publicPaths.includes(path)

  // If the path is public and user is authenticated, redirect to dashboard
  if (isPublicPath && token) {
    try {
      verify(token, process.env.JWT_SECRET)
      return NextResponse.redirect(new URL("/dashboard", request.url))
    } catch {
      // If token verification fails, continue to public path
      return NextResponse.next()
    }
  }

  // If the path is not public and user is not authenticated, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // For all other cases, continue
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

