import { NextResponse, NextRequest } from 'next/server';
import { getUrl } from '@/lib/get-url';

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('authjs.session-token');
  const pathname = request.nextUrl.pathname;

  if (
    (pathname.includes('sign-in') && token) ||
    (pathname.includes('sign-up') && token)
  ) {
    return NextResponse.redirect(new URL(getUrl('/home')));
  }

  if (pathname.includes('/home') && !token) {
    return NextResponse.redirect(new URL(getUrl('/auth/sign-in')));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico).*)'],
};
