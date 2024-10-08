'use client';

import '../otom.css'
import Link from "next/link";

const OtomHeader = () => {
  return (
<div className="flex justify-center items-center fixed z-50 w-full top-10">
  <nav className="z-20 transition ease-out duration-200 flex w-max dark:border-slate-900/20 border-white/20 border-2 sticky justify-center items-center text-dyblack py-3 dark:bg-slate-900/30 bg-white/30 backdrop-blur rounded-full">
    <Link href={'/otom'}>
      <p className="dark:text-white otomtxt text-xl font-bold duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue logo mx-14">OTOM</p>
    </Link>
    <Link href={'/otom/wiki'}>
      <p className="dark:text-white duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue mx-14">Wiki</p>
    </Link>
    <Link href={'/otom/blog'}>
      <p className="dark:text-white duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue mx-14">Blog</p>
    </Link>
    <Link href={'https://drive.google.com/drive/u/1/folders/1jPEaSmrXxMvIrjGyZRcV9OH_DX0ovaN8'}>
      <p className="dark:text-white duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue mx-14 hidden sm:block">Assets</p>
    </Link>
    <Link href={'/otom/jogos'}>
      <p className="dark:text-white duration-200 ease-out hover:text-dyblue dark:hover:text-dyblue mx-14 hidden sm:block">Jogos</p>
    </Link>
  </nav>
</div>

    
  );
};

export default OtomHeader;
