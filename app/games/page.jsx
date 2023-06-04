"use client";

import Link from 'next/link';
import Image from 'next/image';
import '../../styles/globals.css'

const Games = () => {
  return (
    <>
    <section className="w-full z-10 mt-8 px-40">
      <div className='flex'>
        <h1 translate="no" className="text-dyblack text-7xl">Games</h1><Image className={"mx-3"} src="/assets/icons/arrow.svg" width={30} height={30}/>
      </div>
        <div class="flex justify-space-between items-center justify-center w-full">

        <Link href="/games/merge">
          <div className='m-3 game-shadow flex-1 flex justify-start gap-3 cursor-pointer hover:scale-105 transition-all ease-out shadow-md rounded-xl overflow-hidden'>
            <div className='flex mt-32 p-2 b-0 z-10 absolute'>
              <p className='text-2xl text-dywhite drop-shadow-2xl'>Merge</p>
            </div>
            <Image 
                src={'/assets/images/merge.png'} 
                width={400} 
                height={500} 
                className='z-0 game-shadow'
                style={{boxShadow: 'inset 88px -28px 155px 13px rgba(0, 0, 0, 0.63)'}}
            />
          </div>
        </Link>

        <Link href="https://fishclicker.netlify.app">
          <div className='m-3 game-shadow flex-1 flex justify-start gap-3 cursor-pointer hover:scale-105 transition-all ease-out shadow-md rounded-xl overflow-hidden'>
            <div className='flex mt-32 p-2 b-0 z-10 absolute'>
              <p className='text-2xl text-dywhite drop-shadow-2xl'>Fish Clicker</p>
            </div>
            <Image 
                src={'/assets/images/fishclicker2.png'} 
                width={400} 
                height={500} 
                className='z-0 game-shadow'
                style={{boxShadow: 'inset 88px -28px 155px 13px rgba(0, 0, 0, 0.63)'}}
            />
          </div>
        </Link>
        
        </div>
      </section>
      <div className='bggames'/>
    </>
  )
}

export default Games;