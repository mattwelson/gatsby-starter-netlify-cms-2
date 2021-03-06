module.exports = {
  siteMetadata: {
    title: 'Codie Westphall',
    twitter: 'https://twitter.com/codie1991'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'src-images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-attr',
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images-flex`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200
            }
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                line: 'custom-block-line',
                info: 'custom-block-info'
              }
            }
          }
        ]
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ],
  mapping: {
    'MarkdownRemark.fields.parentTrip': 'MarkdownRemark',
    'MarkdownRemark.fields.childTrips': 'MarkdownRemark'
  }
}
