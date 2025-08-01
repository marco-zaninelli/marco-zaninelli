import { getServerSideSitemap } from 'next-sitemap'
import { client } from '@/services/sanity/sanity-client'

export const getServerSideProps = async (ctx) => {
    // Fetch all dynamic routes from Sanity
    const portfolioItems = await client.fetch(`
    *[_type == "portfolio"] {
      "slug": slug.current,
      _updatedAt
    }
  `)

    const fields = [
        // Add your static routes
        {
            loc: `${process.env.SITE_URL}`, // Homepage
            lastmod: new Date().toISOString(),
            priority: 1.0,
            changefreq: 'daily',
        },
        {
            loc: `${process.env.SITE_URL}/galleria`,
            lastmod: new Date().toISOString(),
            priority: 0.8,
            changefreq: 'weekly',
        },
        // Add your dynamic routes from Sanity
        ...portfolioItems.map((item) => ({
            loc: `${process.env.SITE_URL}/portfolio/${item.slug}`,
            lastmod: item._updatedAt,
            priority: 0.7,
            changefreq: 'weekly',
        })),
    ]

    return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}