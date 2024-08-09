'use client';

import '../otom.css'
import Link from "next/link";
import Image from "next/image";

const OtomNews = () => {
  return (
<div className="group flex justify-center items-center w-full top-2 justify-center items-center my-8 z-40">
    <div className='duration-200 ease-out w-max px-3 hover:px-4 py-1 cursor-pointer flex justify-center space-x-3 items-center bg-white dark:bg-slate-900 dark:text-white text-xs drop-shadow-md border dark:border-slate-900 border-slate-100 rounded-full w-3 sticky '>
        <Image width={15} height={15} alt="sparkle" src="/assets/icons/sparkle.svg" className='animate-pulse dark:invert mr-2'/>
        Novo Vídeo!
        <a target="_blank" rel="noopener noreferrer"  href={'https://youtu.be/ZqD2OkNn8K8?si=mr55q0PlztFpH5kr'}>
        <p className="font-bold duration-200 ease-out group-hover:text-dyblue logo dark:text-white">Como animar igual OTOM - Terceira Temporada</p>
        </a>
    </div>
</div>

    
  );
};

export default OtomNews;
