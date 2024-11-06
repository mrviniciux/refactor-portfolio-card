/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mrviniciux.netlify.app/',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin', '/login'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/login'] },
    ],
  },
};
