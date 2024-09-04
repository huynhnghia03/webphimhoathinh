/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // output: 'standalone',
    siteUrl: process.env.NEXT_PUBLIC_API_FRONTEND,
    generateRobotsTxt: true, // (optional) create robots.txt file
    sitemapSize: 7000, // số lượng tối đa các URL trong một sitemap
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_API_FRONTEND,
                pathname: '/**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/upload/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL_UPLOAD}upload/:path*`, // Add a leading slash to the URL
            },
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Add a leading slash to the URL
            },
            {
                source: '/episoden/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL}/episoden/:path*`, // Add a leading slash to the URL
            }
        ]
    },
};

export default nextConfig;
