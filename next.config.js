const {nextI18NextRewrites} = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  trailingSlash: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  images: {
    loader: 'imgix',
    domains: ['images.unsplash.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
}
