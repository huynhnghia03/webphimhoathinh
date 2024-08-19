import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = ['/admin/manage-kkhstyw56']
const authPaths = ['/admin/login-3f72dkwt3']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  console.log(pathname)
  const sessionToken = request.cookies.get('user_token')?.value
  // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL('/admin/login-3f72dkwt3', request.url))
  }
  // Đăng nhập rồi thì không cho vào login/register nữa
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL('/admin/manage-kkhstyw56', request.url))
  }
  // if (!sessionToken) {
  //   return NextResponse.redirect(new URL('/admin/login-3f72dkwt3', request.url))
  // }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/manage-kkhstyw56', '/admin/login-3f72dkwt3', '/admin/manage-kkhstyw56/:path*']
}
