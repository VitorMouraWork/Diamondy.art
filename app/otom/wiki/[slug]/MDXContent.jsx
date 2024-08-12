'use client';

import { MDXRemote } from 'next-mdx-remote';

import AboutContent from '../wiki components/AboutContent';
import Image from 'next/image';

const components = { AboutContent, Image, }

export default function MDXContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}

