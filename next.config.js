/** @type {import('next').NextConfig} */
const nextConfig = {
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
  
  module.exports = nextConfig