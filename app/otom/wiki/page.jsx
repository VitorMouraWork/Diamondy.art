"use client";

import '../otom.css'
import Link from 'next/link';
import Image from 'next/image';
import Front from "./../../content/wikiHome.mdx";
import WikiHeader from './wiki components/WikiHeader';

const OtomWiki = () => {
  return (
    <>
    <WikiHeader/>
      <section className="w-full h-full z-10 flex flex-col items-center justify-center">     
        {/* parte 1 */}
        <div className='flex flex-col justify-center items-center w-full py-40 space-y-3 bgblur'>
          {/* assets */}
          <div className='duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-5 rounded-3xl w-[80rem] max-w-[80rem] space-y-5'>
              <Image className={"self-center translate-y-5"} src="/assets/icons/otom/otom wiki.svg" width={420} height={420}/>
              <p className='self-center dark:text-white'>Wiki Oficial de Over the Object Madness</p>
              <hr className='dark:opacity-20'></hr>
              <div className='w-full justify-between px-24 flex'>
                <Link className="text-dyblue flex" href={"/otom/wiki/sobre"}><Image className="mx-1" src="/assets/icons/otom/info.svg" width={18} height={18}/> Sobre</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/personagens"}><Image className="mx-1" src="/assets/icons/otom/diamond.svg" width={18} height={18}/>Personagens</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/episodios"}><Image className="mx-1" src="/assets/icons/otom/list.svg" width={18} height={18}/>Episódios</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/curtas"}><Image className="mx-1" src="/assets/icons/otom/video.svg" width={18} height={18}/>Curtas</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/extras"}><Image className="mx-1" src="/assets/icons/otom/sparkle.svg" width={18} height={18}/>Extras</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/contribuir"}><Image className="mx-1" src="/assets/icons/otom/pencil.svg" width={18} height={18}/>Como contribuir</Link>
              </div>
          </div>
          <div className='inter font-inter prose prose-slate dark:prose-invert duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-10 rounded-3xl w-[80rem] max-w-[80rem] space-y-5'>
            <Front/>
          </div>
        </div>
      </section>
    </>
  )
}

export default OtomWiki;