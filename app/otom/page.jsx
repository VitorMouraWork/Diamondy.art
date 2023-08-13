"use client";

import Link from 'next/link';
import Image from 'next/image';

const Otom = () => {
  return (
    <>
    <section className="w-full z-10 mt-8 px-40">
      <div className='flex'>
        <h1 translate="no" className="otomtxt text-dyblack text-9xl">OTOM</h1><Image className={"mx-3 mb-14"} src="/assets/icons/arrow.svg" width={30} height={30}/>
      </div>
        <div class="flex flex-col justify-space-between justify-center">
          <h2 className='text-4xl mb-5 mt-5'>assista o último episódio:</h2> <iframe className='rounded-xl ' width="560" height="315" src="https://www.youtube.com/embed/ok4yY4t0uWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className='text-2xl'>OTOM 12: O Tombo</h2>
        </div>
      </section>
      <div className='bggames'/>
    </>
  )
}

export default Otom;