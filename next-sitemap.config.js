
/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    siteUrl: process.env.NEXT_PUBLIC_API_SITE, // URL trang web của bạn
    generateRobotsTxt: true, // Tạo robots.txt tự động
    generateIndexSitemap: true,
    sitemapSize: 7000, // Kích thước sitemap
    exclude: ['/admin/**'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',   // Áp dụng cho tất cả các công cụ tìm kiếm
                allow: '/',       // Cho phép truy cập tất cả các trang
                disallow: ['/admin/**'],  // Chặn thư mục /admin/
            }
        ],
    },
    // additionalPaths: async (config) => {
    //     try {
    //         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/AllTopics`, { next: { revalidate: 60 } });
    //         const { dataAll } = await res.json();
    //         const allFilmPages = Array.from({ length: Math.ceil(dataAll.length / 14) }, (_, index) => ({
    //             loc: `/AllFilm/${index + 1}`,
    //             lastmod: new Date().toISOString()
    //         }));
    //         const episodePaths = dataAll.map((slug) => {
    //             return Array.from({ length: parseInt(slug.totalEpiso) }, (_, i) => ({
    //                 loc: `/${slug.slug}/tap-${parseInt(slug.newEpiso) - i}.html`,
    //                 lastmod: new Date().toISOString()
    //             }));
    //         }).flat();

    //         // Kết hợp tất cả các URL lại thành mảng duy nhất
    //         const fullPaths = [
    //             ...allFilmPages,
    //             ...dataAll.map(slug => ({
    //                 loc: `/${slug.slug}`,
    //                 lastmod: new Date().toISOString()
    //             })),
    //             ...episodePaths
    //         ];
    //         // console.log(fullPaths)
    //         return fullPaths
    //     } catch (error) {
    //         console.error("Error fetching additional paths:", error);
    //         return [];
    //     }
    // },

};

module.exports = nextConfig;
