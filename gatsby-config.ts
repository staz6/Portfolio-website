import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: "production",
        url: 'https://0fdtpk49.api.sanity.io/v2023-08-01/graphql/production/default',
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
