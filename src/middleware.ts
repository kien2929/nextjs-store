import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('sessionToken')
  console.log('123')
  console.log(cookie)
  console.log(request.nextUrl.pathname);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/me"],
};
