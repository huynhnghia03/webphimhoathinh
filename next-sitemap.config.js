/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    siteUrl: process.env.NEXT_PUBLIC_API_SITE,
    generateRobotsTxt: true, // (optional) create robots.txt file
    sitemapSize: 7000, // số lượng tối đa các URL trong một sitemap
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',   // Áp dụng cho tất cả các công cụ tìm kiếm
                allow: '/',       // Cho phép truy cập tất cả các trang
                disallow: ['/admin/'],  // Chặn thư mục /admin/
            }
        ],
    },
}


module.exports = nextConfig;
