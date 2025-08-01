/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.marco.zaninelli.me',
    generateRobotsTxt: true,
    exclude: ['/studio/*', '/api/*'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://www.marco.zaninelli.me/api/server-sitemap.xml'
        ],
        policies: [
            {
                userAgent: '*',
                disallow: ['/studio/', '/api/'],
                allow: '/',
            },
        ],
    },
    // Add these important configurations
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    alternateRefs: [
        {
            href: 'https://www.marco.zaninelli.me',
            hreflang: 'it',
        },
        {
            href: 'https://www.marco.zaninelli.me/en',
            hreflang: 'en',
        },
    ],
}