/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },
    redirects: async() => {
      return [
        {
          source: '/merge.html',
          destination: '/games/merge',
          permanent: true,
        },
        {
          source: '/goime500.html',
          destination: '/games/goime500',
          permanent: true,
        },
        {
          source: '/games/fish/fishclicker.html',
          destination: '/games',
          permanent: true,
        }
      ]
    }
  }
  
  module.exports = withMDX(nextConfig)