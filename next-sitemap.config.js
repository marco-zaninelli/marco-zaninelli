
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.marco.zaninelli.me',
    generateRobotsTxt: true,
    exclude: ['/studio/*', '/api/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: ['/studio/', '/api/'],
            },
        ],
    },
}