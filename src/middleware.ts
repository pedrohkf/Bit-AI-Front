import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const cookie = request.cookies.get('token')
    const token = cookie?.value;
    const authenticated = token ? true : false;

    if (!authenticated && request.nextUrl.pathname.startsWith('bit-ai/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(authenticated && request.nextUrl.pathname.startsWith('/login')){
        return NextResponse.redirect(new URL('/bit-ai/dashboard', request.url))
    }

    return NextResponse.next();
}

export const cofig = {
    matcher: ['/login/:path*', '/bit-ai/:path*'],
};