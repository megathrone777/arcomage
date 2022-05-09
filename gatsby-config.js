const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Arcomage`,
    description: `A multiplayer card game based on the Arcomage minigame from Heroes of Might and Magic VII`,
    author: `ACTUM DU-Innogy`,
  },
  pathPrefix: `project/arcomage`,
  plugins: [
    // Temporarily disable ESLint plugin until we'll agree on the rules
    // `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
        displayName: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `${__dirname}/src/audio`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arcomage`,
        short_name: `arcomage`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@audio': path.resolve(__dirname, 'src/audio'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@state': path.resolve(__dirname, 'src/state'),
        },
        extensions: [
          'js',
          'scss'
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
