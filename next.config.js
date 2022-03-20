const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withPWA = require('next-pwa')

module.exports = withPlugins([
  {
    distDir: 'build',
    swcMinify: true,
    typescript: {
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    images: {
      domains: [],
      disableStaticImages: false
    }
  },
  [withPWA, { 
    pwa: {
      dest: 'public'
    }
  }],
  withSvgr
  // your other plugins here
])
