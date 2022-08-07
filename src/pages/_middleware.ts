import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '@/utils/verifyJWT'
import { USER_TOKEN, Routes } from '@/configs'

export async function middleware(req: NextRequest) {
  // Add the user token to the response
  const url = req.nextUrl.clone()
  const payload = await verifyAuth(req.cookies[USER_TOKEN])
  const page = Routes.find(route => route.path === req.page.name)

  if (!payload && (page?.secure || page === undefined)) {
    url.pathname = '/login'
    page !== undefined && url.searchParams.set('RedirectedTo', req.page.name)

    return NextResponse.redirect(url)
  } else if (payload && page?.authSystem) {
    url.pathname = '/teste'

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
