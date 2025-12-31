import { NextRequest, NextResponse } from "next/server";

const REDIRECTS: Record<string, string> = {
    "https://www.esthoj.com/consultancy.html": "https://construction.esthoj.com",
    "https://www.esthoj.com/others.html": "https://construction.esthoj.com/projects",
    "https://www.esthoj.com/service.html": "https://construction.esthoj.com/services",
    "https://www.esthoj.com/project.html": "https://construction.esthoj.com/projects",
    "https://www.esthoj.com/ESTHOJ_MULTI-DISCIPLINARY_CONSULTANT.pdf": "https://construction.esthoj.com/services",
    "https://www.esthoj.com/ESTHOJ_MULTI-DISCIPLINARY_ENGINEERING_CONSTRUCTION.pdf" : "https://construction.esthoj.com/services",
  };
  
  export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;
  
    const target = REDIRECTS[pathname];
  
    if (target) {
      return NextResponse.redirect(
        new URL(`${target}${search}`, request.url),
        301
      );
    }
  
    return NextResponse.next();
  }
  