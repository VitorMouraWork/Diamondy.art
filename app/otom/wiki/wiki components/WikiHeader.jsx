'use client';

import Link from "next/link";
import Image from "next/image";

const WikiHeader = () => {
  return (
<div className="max-sm:hidden flex justify-center fixed z-20 w-full top-10">
  <nav className="max-sm:w-full z-20 ease-out duration-200 drop-shadow-lg flex w-max sticky text-dyblack py-3 w-[80rem] max-w-[80rem] dark:bg-slate-900 bg-white items-center justify-between rounded-full px-5">
    <div className='flex items-center space-x-12'>

      <Link href={'/otom/wiki/'}>
        <p className="max-sm:hidden dark:text-white otomtxt text-2xl font-bold duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue logo">OTOM WIKI</p>
      </Link>
      <Link href={'/otom/wiki/'}>
        <p className="dark:text-white duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue ">Conteúdo da Wiki</p>
      </Link>
      <Link href={'/otom/wiki/personagens'}>
        <p className="dark:text-white duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue ">Personagens</p>
      </Link>
      <Link href={'/otom/wiki/episodios'}>
        <p className="dark:text-white duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue ">Episódios</p>
      </Link>
    </div>
    <div className='hidden flex p-1 px-2 space-x-2 border-2 border-gray-300 dark:border-slate-800 rounded-full ml-80'>
      <Image src="/assets/icons/search.svg" width={15} height={15}/>
      <input className="dark:text-white duration-200 ease-out bg-white dark:bg-slate-900" placeholder='buscar' />
    </div>

  </nav>
</div>

    
  );
};

export default WikiHeader;

