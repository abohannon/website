require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Adam Bohannon`,
    siteTitleAlt: `Adam Bohannon | Software Engineer`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          // {
          //   title: `Blog`,
          //   slug: `/blog`,
          // },
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/abohannon`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/adambohannon`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5MFHPRC",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Bohannon | Software Engineer`,
        short_name: `Adam Bohannon`,
        description: `Adam Bohannon is a software engineer living in San Diego, CA.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
