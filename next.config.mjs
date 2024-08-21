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
                hostname: 'webhoathinhserver.vercel.app', // Corrected hostname
                pathname: '/**', // Optional: restricts paths within localhost
            },
            {
                protocol: 'https',
                hostname: 'webphimhoathinh.vercel.app', // Corrected hostname
                pathname: '/**', // Optional: restricts paths within localhost
            },
        ],


    }
};

export default nextConfig;
