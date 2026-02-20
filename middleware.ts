import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const devHost = process.env.DEV_HOST_OVERRIDE;

  if (devHost && process.env.NODE_ENV === "development") {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("host", devHost);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
