/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    siteUrl: process.env.NEXT_PUBLIC_API_SITE,
    generateRobotsTxt: true, // (optional) create robots.txt file
    sitemapSize: 7000, // số lượng tối đa các URL trong một sitemap
}


module.exports = nextConfig;
