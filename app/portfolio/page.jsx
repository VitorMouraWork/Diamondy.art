"use client";

import Link from 'next/link';
import Image from 'next/image';
import '../../styles/globals.css'

const Portfolio = () => {
  return (
    <>
    <section className="w-full z-10 h-full px-30">
      <div className='flex fixed z-10 ml-40 mt-8'>
        <h1 translate="no" className="text-dyblack text-7xl">Portfolio</h1><Image className={"mx-3"} src="/assets/icons/arrow.svg" width={30} height={30}/>
      {/* </div>
        <div class="flex flex-row-reverse h-full z-0 p-5 bg-dyblackw-full">
          <div className='w-2/5 right-5 bg-dyblue'>
            <Image src="/assets/icons/arrow.svg" width={30} height={30}/>
          </div>*/}
        </div> 
      </section>
      <div className='bggames'/>
    </>
  )
}

export default Portfolio;