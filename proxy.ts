import { NextRequest, NextResponse } from "next/server";

const REDIRECTS: Record<string, string> = {
    "/consultancy.html": "https://construction.esthoj.com",
    "/others.html": "https://construction.esthoj.com/projects",
    "/service.html": "https://construction.esthoj.com/services",
    "/project.html": "https://construction.esthoj.com/projects",
    "/ESTHOJ_MULTI-DISCIPLINARY_CONSULTANT.pdf": "https://construction.esthoj.com/services",
    "/ESTHOJ_MULTI-DISCIPLINARY_ENGINEERING_CONSTRUCTION.pdf" : "https://construction.esthoj.com/services",
  };
  
//   export function middleware(request: NextRequest) {
//     const { pathname, search } = request.nextUrl;
  
//     const target = REDIRECTS[pathname];
  
//     if (target) {
//       return NextResponse.redirect(
//         new URL(`${target}${search}`, request.url),
//         301
//       );
//     }
  
//     return NextResponse.next();
//   }


export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
  
    if (pathname.endsWith(".html")) {
      const newPath = pathname.replace(".html", "");
      return NextResponse.redirect(
        new URL(newPath, request.url),
        301
      );
    }
  
    return NextResponse.next();
  }
  
  export const config = {
    matcher: ["/:path*.html"],
  };
  