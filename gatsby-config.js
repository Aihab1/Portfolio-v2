
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://aihabumair.gatsbyjs.io`,
  },
  plugins: [`gatsby-plugin-react-helmet`, 
            `gatsby-plugin-sitemap`,
            {
              resolve: 'gatsby-plugin-robots-txt',
              options: {
                host: 'https://aihabumair.gatsbyjs.io',
                sitemap: 'https://aihabumair.gatsbyjs.io/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
              }
            }],
}
