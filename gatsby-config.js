'use strict'

module.exports = {
  siteMetadata: {
    title: 'Cobli - Sistema de rastreamento, telemetria e gestão de frotas',
    description: '',
    siteUrl: 'https://cobli.co'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
