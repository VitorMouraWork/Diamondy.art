import OtomHeader from "../otom components/OtomHeader";
import Image from 'next/image';
import Link from "next/link";

const OtomJogos = async () => {

  return (
    <>
      <OtomHeader />
      <section className="w-full h-full z-10 flex flex-col items-center justify-center">     
        <div className='flex flex-col justify-center items-center w-full py-40 space-y-3 bgblur'>
          <div className='duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-5 rounded-3xl w-[80rem] max-w-[80rem] max-sm:w-full space-y-5'>
              <Image src="/assets/icons/otom/games.svg" width={250} height={250}/>
            <hr className='dark:opacity-20'></hr>
            <div className="w-full flex flex-wrap">
            <Link href="/games/merge">
                    <div className='w-fit game-shadow m-[0.4rem] flex justify-start gap-3 h-52 cursor-pointer hover:scale-105 transition-all ease-out '>
                        <div className='flex p-2 bottom-0 z-10 absolute'>
                            <p className='text-2xl text-dywhite drop-shadow-2xl'>Merge</p>
                        </div>
                        <Image src={'/assets/images/merge.png'} width={400} height={500} className='z-0 game-shadow object-cover'/>
                    </div>
                </Link>
                <Link href="https://www.roblox.com/games/12188814735/OTOM-RP">
                    <div className='w-fit game-shadow m-[0.4rem] flex justify-start gap-3 h-52 cursor-pointer hover:scale-105 transition-all ease-out '>
                        <div className='flex p-2 bottom-0 z-10 absolute'>
                            <p className='text-2xl text-dywhite drop-shadow-xl'>OTOM Roleplay</p>
                        </div>
                        <Image src={'https://pbs.twimg.com/media/FnsN5jDXEAAsZwU?format=jpg&name=large'} width={400} height={500} className='z-0 object-cover game-shadow'/>
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtomJogos;