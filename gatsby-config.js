const autoprefixer = require("autoprefixer")

module.exports = {
  siteMetadata: {
    title: `A sample site using gatsby-source-wordpress`,
    subtitle: `Data fetched from a site hosted on wordpress.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"]
          })
        ],
        precision: 8
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `dev-beyond-the-fly.pantheonsite.io`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false
      }
    }
  ]
}
