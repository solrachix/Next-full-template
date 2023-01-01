import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '@/utils/verifyJWT'
import { USER_TOKEN, Routes, privateRoute, authRoute } from '@/configs'
const routesName = Routes.map(route => route.path)

export async function middleware(req: NextRequest) {
  const routeName = req.page.name

  if (routesName.includes(routeName)) {
    const url = req.nextUrl.clone()
    const page = Routes.find(route => route.path === routeName)
    // Verificando o token do usuário
    const isAuthenticated = await verifyAuth(req.cookies[USER_TOKEN])
    const slugPage = page?.slugs?.find(
      slug => slug.value === req?.page?.params?.slug
    )

    if (!isAuthenticated && (page?.secure || slugPage?.secure)) {
      url.pathname = authRoute.path
      page && url.searchParams.append('RedirectedTo', req.nextUrl.pathname)

      return NextResponse.redirect(url)
    } else if (isAuthenticated && page?.authSystem) {
      url.pathname = privateRoute.path

      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}
