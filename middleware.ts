'use client'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = ['/admin/manage-kkhstyw56']
const authPaths = ['/admin/login-3f72dkwt3']
const preventPaths = ['index.php', 'server-status', 'wp-login.php'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionToken = request.cookies.get('user_token')?.value

  if (preventPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL('/admin/login-3f72dkwt3', request.url))
  }
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL('/admin/manage-kkhstyw56', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/manage-kkhstyw56',
    '/admin/login-3f72dkwt3',
    '/admin/manage-kkhstyw56/:path*'
  ]
}
