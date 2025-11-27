import { blogPosts } from '~/blog-meta.js'

const SITE_URL = 'https://orangize.de'

export default defineEventHandler((event) => {
  // Static pages with priorities
  const staticPages = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/google-ads', priority: 0.9, changefreq: 'weekly' },
    { loc: '/website-erstellen-lassen', priority: 0.9, changefreq: 'weekly' },
    { loc: '/google-ads-analyse', priority: 0.8, changefreq: 'monthly' },
    { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
    // City pages - Website
    { loc: '/website-erstellen-herford', priority: 0.7, changefreq: 'monthly' },
    { loc: '/website-erstellen-minden', priority: 0.7, changefreq: 'monthly' },
    { loc: '/website-erstellen-buende', priority: 0.7, changefreq: 'monthly' },
    { loc: '/website-erstellen-porta-westfalica', priority: 0.7, changefreq: 'monthly' },
    { loc: '/website-erstellen-bad-oeynhausen', priority: 0.7, changefreq: 'monthly' },
    { loc: '/website-erstellen-bielefeld', priority: 0.7, changefreq: 'monthly' },
    // City pages - Google Ads
    { loc: '/google-ads-porta-westfalica', priority: 0.7, changefreq: 'monthly' },
    { loc: '/google-ads-bielefeld', priority: 0.7, changefreq: 'monthly' },
    { loc: '/google-ads-buende', priority: 0.7, changefreq: 'monthly' },
    { loc: '/google-ads-herford', priority: 0.7, changefreq: 'monthly' },
    { loc: '/google-ads-minden', priority: 0.7, changefreq: 'monthly' },
    // Branchen pages
    { loc: '/google-ads-branchen', priority: 0.7, changefreq: 'monthly' },
    { loc: '/google-ads-handwerker', priority: 0.7, changefreq: 'monthly' },
    // Legal pages
    { loc: '/impressum', priority: 0.3, changefreq: 'yearly' },
    { loc: '/datenschutz', priority: 0.3, changefreq: 'yearly' },
  ]

  // Generate blog post URLs from blog-meta
  const blogUrls = blogPosts.map(post => ({
    loc: `/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  }))

  const allUrls = [...staticPages, ...blogUrls]

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${SITE_URL}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})
