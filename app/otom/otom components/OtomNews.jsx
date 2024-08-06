'use client';

import '@/styles/otom.css'
import Link from "next/link";
import Image from "next/image";

const OtomNews = () => {
  return (
<div className="flex justify-center items-center w-full top-2 justify-center items-center my-8 text-dyblack">
    <div className='duration-200 ease-out w-max px-3 hover:px-4 py-1 cursor-pointer flex justify-center space-x-3 items-center bg-white text-xs drop-shadow-md border border-slate-100 rounded-full w-3 sticky text-dyblack '>
        <Image width={15} height={15} alt="sparkle" src="/assets/icons/sparkle.svg" className='mr-2'/>
        Novo Vídeo!
        <Link href={'https://www.youtube.com/watch?v=ZqD2OkNn8K8&t=320s'}>
        <p className="transition font-bold duration-200 ease-out hover:text-dyblue logo">Como animar igual OTOM - Terceira Temporada</p>
        </Link>
    </div>
</div>

    
  );
};

export default OtomNews;
