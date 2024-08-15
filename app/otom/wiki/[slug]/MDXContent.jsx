'use client';

import { MDXRemote } from 'next-mdx-remote';

import AboutContent from '../wiki components/AboutContent';
import Image from 'next/image';
import CharacterListItem from '../wiki components/CharacterListItem';
import Characters from '../../otom components/Characters';
import CharacterInfo from '../wiki components/CharacterInfo';
import TableOfContents from '../wiki components/TableOfContents';

const components = { AboutContent, Image, CharacterListItem, Characters, CharacterInfo, TableOfContents, }

export default function MDXContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}

