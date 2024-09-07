/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    siteUrl: "https://hoathinhtq3d.xyz/",
    generateRobotsTxt: true, // (optional) create robots.txt file
    sitemapSize: 7000, // số lượng tối đa các URL trong một sitemap
}

console.log("Next Sitemap Config:", nextConfig);

module.exports = nextConfig;
