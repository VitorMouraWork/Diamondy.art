import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import WikiHeader from "../wiki components/WikiHeader";
import Image from 'next/image';
import TableOfContents from '../wiki components/TableOfContents';
import '../../otom.css';


// Define the path to the Contents directory
const CONTENT_DIR = path.join(process.cwd(), 'app', 'Contents');

const WikiContent = async () => {
  // Read all files from the Contents directory
  const files = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.mdx'));

  // Map through the files and extract metadata using gray-matter
  let posts = files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);
    
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title || file.replace(/\.mdx$/, ''),
      author: data.author || 'Unknown',
    };
  });

  // Sort the posts alphabetically by title
  posts = posts.sort((a, b) => a.title.localeCompare(b.title));

  // Group posts by the first letter of the title
  const groupedPosts = posts.reduce((acc, post) => {
    const firstLetter = post.title[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(post);
    return acc;
  }, {});

  return (
    <>
      <WikiHeader />
      <section className="w-full h-full z-10 flex flex-col items-center justify-center">     
        <div className='flex flex-col justify-center items-center w-full py-40 space-y-3 bgblur'>
          <div className='duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-5 rounded-3xl w-[80rem] max-w-[80rem] max-sm:w-full space-y-5'>
            <h1 className='text-3xl text-dyblack dark:text-white'>Conteúdo da Wiki</h1>
            <p>Nesta página estão listadas todas as páginas da wiki de OTOM em ordem alfabética.</p>
            <div>
              {/* Loop through grouped posts and display them */}
              {Object.keys(groupedPosts).sort().map((letter) => (
                <div key={letter}>
                  <h1 className='border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-1 px-3 border-4 rounded-3xl w-15 text-3xl text-dyblack dark:text-white font-bold mb-3'>{letter}</h1> {/* Added custom class */}
                  <ul className='ml-5 list-disc'>
                    {groupedPosts[letter].map((post) => (
                      <li key={post.slug} className='mb-2'>
                        <a href={`/otom/wiki/${post.slug}`} className='text-xl dark:text-white hover:underline'>
                          {post.title} - <span className='text-sm text-slate-400'>{post.author}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WikiContent;
