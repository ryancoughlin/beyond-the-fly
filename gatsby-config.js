require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}',
});

const { RichText } = require('prismic-reactjs');
const { Elements } = RichText;

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
  twitter,
} = require('./src/utils/website');

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'chivo\:400,700,900'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: '/src/assets/images/'
        },
      }
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '29bd5f384defb9b5e0088af82b037b',
        previewMode: true,
        disableLiveReload: false,
      },
    },
    'gatsby-plugin-lodash',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    'gatsby-plugin-netlify',
  ],
};
