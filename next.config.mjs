import nextMDX from '@next/mdx'
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug, remarkAutolinkHeadings],
    rehypePlugins: [],
  }
})

/** @type {import('next').NextConfig} */
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
  
  export default withMDX(nextConfig)