/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_API_URL_UPLOAD,
                pathname: '/**',
            },
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
                source: '/',
                destination: process.env.NEXT_PUBLIC_API_URL + "/:path*",
            },
        ]
    },
};

export default nextConfig;
