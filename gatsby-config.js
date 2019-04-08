module.exports = {
  siteMetadata: {
    name: `Mat Dupont`,
    title: `ForwardJS - Getting Started with Gatsby`,
    date: `@matldupont`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
