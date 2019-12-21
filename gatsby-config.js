require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}'
});

const {
  _pathPrefix,
  shortName,
  description,
  themeColor,
  backgroundColor,
  _title,
  _titleAlt,
  _url,
  author,
  logo,
  favicon,
  siteLanguage,
  twitter
} = require('./src/utils/website');

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        families: ['Inter UI'],
        urls: ['/fonts/fonts.css']
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'egv8gup'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: '/src/assets/images/'
        }
      }
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '3f3eb4f7cb0a52c61c1a797e17b058',
        previewMode: true || false,
        disableLiveReload: false
      }
    },
    'gatsby-plugin-lodash',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    'gatsby-plugin-netlify'
  ]
};
