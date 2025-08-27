import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Middleware logic can be added here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect routes that require authentication
        if (req.nextUrl.pathname.startsWith('/mypage')) {
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/mypage/:path*',
    // Add other protected routes here
  ]
}