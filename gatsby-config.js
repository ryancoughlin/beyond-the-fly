require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}'
});

module.exports = {
  siteMetadata: {
    title: 'Beyond the Fly: ',
    titleTemplate: '%s · Beyond the Fly',
    description:
      'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    url: 'https://www.beyondthefly.com', // No trailing slash allowed!
    image: '/icon.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@ryancoughlin'
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beyond the Fly`,
        short_name: `Beyond the Fly`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffc500`,
        display: `standalone`,
        icon: `src/assets/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`chivo\:400,700,900`],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Chivo`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        families: ['Inter UI'],
        urls: ['/fonts/fonts.css']
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
