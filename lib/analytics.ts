// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

// Hàm này dùng để gửi pageview cho mỗi lần thay đổi trang
export const pageview = (url: string) => {
    if (typeof window !== "undefined" && GA_TRACKING_ID) {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};