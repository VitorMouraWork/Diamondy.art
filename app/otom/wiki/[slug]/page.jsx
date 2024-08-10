import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import matter from 'gray-matter';
import WikiHeader from '../wiki components/WikiHeader';
import TableOfContents from '../wiki components/TableOfContents';

const CONTENT_DIR = path.join(process.cwd(), 'app', 'otom', 'wiki', 'Contents');

// Dynamic import for the client component
const MDXContent = dynamic(() => import('./MDXContent'));

export async function generateStaticParams() {
  const files = fs.readdirSync(CONTENT_DIR);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }) {
  const filePath = path.join(CONTENT_DIR, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return {};
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(content);
  return {
    title: data.title || params.slug,
  };
}

export default async function WikiPage({ params }) {
  const { slug } = params;
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound(); // Return a 404 if the file does not exist
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data: data } = matter(source);
  const mdxSource = await serialize(content);

  return (
    <>
      <WikiHeader />
      <section className="w-full order-0 h-full z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full py-40 space-y-3 bgblur">
          <div className="inter font-inter prose prose-slate dark:prose-invert duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-10 rounded-3xl w-[80rem] max-w-[80rem] space-y-5">
            <h1 className='mb-0'>{data.title}</h1>
            <p>{data.author}</p>
            <hr></hr>
            <TableOfContents />
            <MDXContent source={mdxSource} />
            <p className='opacity-25 text-xs translate-y-5'>O conteúdo da wiki está disponível sob CC-BY-SA salvo indicação em contrário.</p>
          </div>
        </div>
      </section>
    </>
  );
}