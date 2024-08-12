import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import OtomHeader from "../otom components/OtomHeader";
import Image from 'next/image';

// Define the path to the Blog contents directory
const CONTENT_DIR = path.join(process.cwd(), 'app', 'Contents', 'Blog');

const OtomBlog = async () => {
  // Read all files from the Blog directory
  const files = fs.readdirSync(CONTENT_DIR);

  // Map through the files and extract metadata using gray-matter
  const posts = files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);
    
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title || file,
      author: data.author || 'Unknown',
      date: data.date || 'No Date',
      image: data.image || '/assets/icons/otom/diamond select.png', // default image if not provided
    };
  });

  return (
    <>
      <OtomHeader />
      <section className="w-full h-full z-10 flex flex-col items-center justify-center">     
        <div className='flex flex-col justify-center items-center w-full py-40 space-y-3 bgblur'>
          <div className='duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-5 rounded-3xl w-[80rem] max-w-[80rem] max-sm:w-full space-y-5'>
              <Image src="/assets/icons/otom/blog.svg" width={250} height={250}/>
            <hr className='dark:opacity-20'></hr>
            <div>
              {/* Loop through the posts and display them */}
              {posts.map((post) => (
                <a href={`/otom/blog/${post.slug}`} key={post.slug} className='mb-5 flex items-start hover:shadow-md hover:-translate-y-1 border-2 dark:border-slate-700 ease-out duration-200 p-5 rounded-3xl'>
                  <img src={post.image} alt={post.title} className='w-32 h-32 object-cover rounded-xl mr-5' />
                  <div>
                    <h2 className='text-3xl dark:text-white font-bold'>{post.title}</h2>
                    <p className='font-light dark:text-white mt-3'>{post.date}</p>
                    
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtomBlog;
