"use client";

import '../otom.css';
import Link from 'next/link';
import Image from 'next/image';
import Front from "./Contents/wikiHome.mdx";
import WikiHeader from './wiki components/WikiHeader';

const OtomWiki = () => {
  return (
    <>
    <WikiHeader/>
      <section className="w-full h-full z-10 flex flex-col items-center justify-center">     
        <div className='flex flex-col justify-center items-center w-full py-40 space-y-3 bgblur'>
          <div className='duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-5 rounded-3xl w-[80rem] max-w-[80rem] space-y-5'>
              <h1 className='otomtext text-3xl'>BLOG</h1>
              <hr className='dark:opacity-20'></hr>
          </div>
        </div>
      </section>
    </>
  )
}

export default OtomWiki;