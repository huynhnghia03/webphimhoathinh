/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost', // Corrected hostname
                pathname: '/**', // Optional: restricts paths within localhost
            },
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
                destination: process.env.NEXT_PUBLIC_API_URL_UPLOAD + "/:path*",
            }
        ]
    },
};

export default nextConfig;
