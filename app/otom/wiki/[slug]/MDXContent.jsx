'use client';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import AboutContent from '../wiki components/AboutContent';
import Image from 'next/image';

const components = { AboutContent, Image, }

export default function MDXContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}

// export async function getStaticProps() {
//   // MDX text - can be from a local file, database, anywhere
//   const source = 'Some **mdx** text, with a component <AboutContent />';
//   const mdxSource = await serialize(source);
//   return { props: { source: mdxSource } };
// }