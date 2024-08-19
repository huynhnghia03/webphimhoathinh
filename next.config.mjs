/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hhkungfu.cafe',
                pathname: '/wp-content/uploads/**', // This is optional; it restricts paths within the hostname
            },
            {
                protocol: 'http',
                hostname: 'localhost', // Corrected hostname
                pathname: '/**', // Optional: restricts paths within localhost
            },
        ],


    },
    env: {
        customKey: process.env.SECRET_KEY,
    },
};

export default nextConfig;
