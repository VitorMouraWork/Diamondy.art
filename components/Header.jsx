'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [toggleTopdown, setToggleDropdown] = useState(false);

  return (
    <nav className="z-20 transition ease-out duration-200 flex w-full sticky top-0 justify-center items-center justify-space-between text-dyblack py-3 bg-transparent backdrop-blur-md">
      <Link href={'/'} className="mx-14 ">
        <Image width={100} height={0} alt="logo" src="/assets/icons/logo.svg" className="dyblue-filter transition duration-200 ease-out overflow-hidden" />
      </Link>
      <Link href={'/'} className="mx-14 ">
        <p className="transition duration-200 ease-out hover:text-dyblue">Home</p>
      </Link>
      <Link href={'portfolio'} className="mx-14 ">
        <p className="transition duration-200 ease-out hover:text-dyblue">Portfolio</p>
      </Link>
      <Link href={'/games'} className="mx-14 ">
        <p className="transition duration-200 ease-out hover:text-dyblue">games</p>
      </Link>
      <div className="relative">
        <button onClick={() => setToggleDropdown((prev) => !prev)} className="mx-14 ">
          <p className="transition duration-200 ease-out hover:text-dyblue cursor-pointer">other</p>
        </button>
        {toggleTopdown && (
          <div className="dropdown absolute left-8 mt-1 bg-white text-dyblack rounded-lg shadow-lg ease-in transition-opacity transition-transform">
            <Link
              href={'/otom'}
              className="block px-1 py-1 transition duration-200 ease-out hover:text-dyblue"
              onClick={() => setToggleDropdown(false)}
            >
              otom
            </Link>
          </div>
        )}
      </div>
      <Link href={'/assets/files/Resumé.pdf'} passHref legacyBehavior>
        <a download className="transition duration-200 ease-out hover:text-dyblue mx-14">resumé</a>
      </Link>
    </nav>
  );
};

export default Header;
