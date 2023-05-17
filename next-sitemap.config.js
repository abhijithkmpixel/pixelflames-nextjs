/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.DOMAIN_URL,
  generateRobotsTxt: true, // (optional)
  exclude: ["/400", "/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  },
  // ...other options
};
