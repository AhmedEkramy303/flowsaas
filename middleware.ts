// middleware.ts
import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/tools/:path*",      // حماية أدوات AI
    "/products/:path*",   // حماية صفحات المنتجات عند الحاجة
  ],
}
