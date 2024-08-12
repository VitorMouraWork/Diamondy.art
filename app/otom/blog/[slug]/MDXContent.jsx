'use client';

import { MDXRemote } from 'next-mdx-remote';

import Image from 'next/image';

const components = { Image, }

export default function MDXContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}

