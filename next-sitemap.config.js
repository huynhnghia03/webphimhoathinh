/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    // output: 'export',
    // output: 'standalone',
    siteUrl: process.env.NEXT_PUBLIC_API_SITE || "https://hoathinhtq3d.xyz/",
    generateRobotsTxt: true, // (optional) create robots.txt file
    sitemapSize: 7000, // số lượng tối đa các URL trong một sitemap
}