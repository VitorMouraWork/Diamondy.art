"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import '../styles/globals.css'

const Home = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <>
    <section className="w-full z-10 mt-6 px-40">
      <h1 translate="no" className="text-dyblue text-7xl textAppear animate-textAppear">Diamondy.art</h1>
      <div class="about flex mt-3">

        <div class="dropdown-session">
          
            <Image
              className={`mt-1 relative mx-3 transition-transform duration-200 ease-out ${isDropdownOpen ? 'rotate-90' : ''}`}
              src="/assets/icons/dropdown-arrow.svg"
              width={15}
              height={15}
              alt='dropdown'
              onClick={toggleDropdown}
              id='btn'
            ></Image>

          <div className={`dropdown-items transition-transform transition-all duration-200 ease-out ${
          isDropdownOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
        }`}>
            <ul>
              <li>graphic designer</li>
              <li>fullstack developer</li>
              <li>web developer</li>
              <li>content creator</li>
              <li>animator</li>
              <li>concept artist</li>
              <li>game developer</li>
              <li>enviroment artist</li>
              <li>writer</li>
            </ul>
          </div>
        </div>

        <h2 className='text-2xl mr-4 self-center'>Freelance Artist</h2>
        <div class="flex justify-space-between items-center justify-center">

          <Link href={"https://www.youtube.com/c/Diamondyy"} className='mx-4'>
            <Image 
              src={"/assets/icons/youtube.svg"}
              width={20}
              height={20}
              alt='youtube'
              className='dyblue-filter'
            />
          </Link>
          <Link href={"https://twitter.com/Diamondyeet"} className='mx-4'>
            <Image 
              src={"/assets/icons/twitter.svg"}
              width={20}
              height={20}
              className='dyblue-filter'
            />
          </Link>
          <Link href={"https://www.instagram.com/diamondyarts/"} className='mx-4'>
            <Image 
              src={"/assets/icons/instagram.svg"}
              width={20}
              height={20}
              className='dyblue-filter'
            />
          </Link>
          <Link href={"https://behance.net/diamondyarts"} className='mx-4'>
            <Image 
              src={"/assets/icons/behance.svg"}
              width={20}
              height={20}
              className='dyblue-filter'
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/vitor-moura-140237232/"} className='mx-4'>
            <Image 
              src={"/assets/icons/linkedin.svg"}
              width={20}
              height={20}
              className='dyblue-filter'
            />
          </Link>
        </div>
      </div>
      </section>
      <div className='bghome'/>
    </>
  )
}

export default Home;