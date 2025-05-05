/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - /_next (Next.js internals)
     * - /api (API routes)
     * - /static or file paths
     */
    '/((?!_next|api|favicon.ico|static|.*\\..*).*)',
  ],
};

export default nextConfig;
