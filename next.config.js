const {nextI18NextRewrites} = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  //trailingSlash: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
}
