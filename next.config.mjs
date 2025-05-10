/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.sanity.io"]
    },
    i18n: {
        locales: ["en", "it"],
        defaultLocale: "en"
    },
};

export default nextConfig;
