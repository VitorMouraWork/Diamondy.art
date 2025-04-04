"use client";
import './otom.css'
import Link from 'next/link';
import Image from 'next/image';
import BlueBlur from './otom components/blueblur';
import OtomNews from './otom components/OtomNews';
import Characters from './otom components/Characters';
import OtomHeader from './otom components/OtomHeader';

const Otom = () => {

  return (
    <>
    <OtomHeader/>
    <BlueBlur/>
    {/* personagens */}
    <div className='sm:absolute sm:w-full sm:flex sm:flex-col sm:items-center sm:z-10'>
      <div className='-ml-[80rem]'>
        <div className='-ml-[8rem] mt-[10rem]'><Characters/></div>
        <div className='-ml-[4rem] mt-[24rem]'><Characters/></div>
        <div className='ml-[7rem] -mt-[5rem]'><Characters/></div>
        <div className='ml-[12rem] -mt-[15rem]'><Characters/></div>
        <Image src="/assets/icons/otom/Grass.svg" width={1200} height={1200} className='absolute ml-[7rem] mt-[10rem] pointer-events-none'/>
      </div>
      <div className='ml-[28rem]'>
        <div className='ml-[21rem] mt-[0rem]'><Characters/></div>
        <div className='ml-[41rem] mt-[2rem]'><Characters/></div>
        <div className='ml-[40rem] mt-[10rem]'><Characters/></div>
        <div className='ml-[28rem] mt-[12rem]'><Characters/></div>
      </div>
    </div>
      <section className="w-full h-full z-10 mt-32 flex flex-col items-center justify-center">
     
        <OtomNews/>
     
        {/* parte 1 */}
          <div className='grassBg w-full px-[20%] mt-36 block md:px-0 dark:hidden'>             
              <div className='flex z-10 w-full justify-center flex-col items-center -translate-y-20 z-40 flex'>
                <Image className={"mx-3 mb-14"} src="/assets/icons/otom/OTOM.svg" width={420} height={420}/>
                <h1 className='-translate-y-16 text-dyblack dark:text-white text-2xl'>Over the Object Madness</h1>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=1iNW3b7ioxI&pp=ygUEb3RvbQ%3D%3D" className='group dark:bg-slate-800 dark:text-white flex justify-center duration-200 items-center mt-10 border-2 border-black rounded-full px-5 hover:px-6 py-3 z-40'> Assista o último episódio <Image src="/assets/icons/arrow.svg" width={15} height={15} className='ml-3 ease-out duration-200 dark:invert group-hover:translate-x-1 group-hover:-translate-y-1'/></a>
              </div>
              {/* parte 2 */}
              <div className="max-sm:hidden flex flex-col w-full items-center justify-center mt-20 mb-40">
                <div className='duration-200 ease-out p-5 py-1 dark:border-slate-800 dark:bg-slate-800 border-black border-2 rounded-2xl'>
                  <h2 className='text-xl dark:text-white mb-1'>Último lançamento:</h2> 
                  <iframe className='rounded-xl' width="1080" height="650" src="https://www.youtube.com/embed/Enep4CGbQEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <div className='flex w-full justify-between'>
                  <h2 className='text-3xl dark:text-white my-2'>otom 13.0 + 1.0 you can (NOT) eliminate</h2>
                  <p className='text-gray-300 dark:text-slate-500 text-xl mt-2'>01 de Abr. de 2025</p>
                  </div>
                </div>
              </div>
          </div>
              {/* parte 2 dark*/}
          <div className=' grassBgDark w-full px-[20%] mt-36 hidden dark:block'>
              <div className='flex z-10 w-full justify-center flex-col items-center -translate-y-20 flex'>
                <Image className={"mx-3 mb-14"} src="/assets/icons/otom/OTOM.svg" width={420} height={420}/>
                <h1 className='-translate-y-16 text-dyblack dark:text-white text-2xl'>Over the Object Madness</h1>
                <Link href="https://www.youtube.com/watch?v=1iNW3b7ioxI&pp=ygUEb3RvbQ%3D%3D" className='dark:bg-slate-800 dark:text-white flex justify-center duration-75 items-center mt-10 border-2 border-black rounded-full px-5 hover:px-6 py-3'> Assista o último episódio <Image src="/assets/icons/arrow.svg" width={15} height={15} className='ml-3 dark:invert'/></Link>
              </div>
              {/* parte 2 */}
              <div className="max-sm:hidden flex flex-col w-full items-center justify-center mt-20 mb-40">
                <div className='duration-200 ease-out p-5 py-1 dark:border-slate-800 dark:bg-slate-800 border-black border-2 rounded-2xl'>
                  <h2 className='text-xl dark:text-white mb-1'>Último lançamento:</h2> 
                  <iframe className='rounded-xl' width="1080" height="650" src="https://www.youtube.com/embed/Enep4CGbQEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <div className='flex w-full justify-between'>
                    <h2 className='text-3xl dark:text-white my-2'>otom 13.0 + 1.0 you can (NOT) eliminate</h2>
                    <p className='text-gray-300 dark:text-slate-500 text-xl mt-2'>01 de Abr. de 2025</p>
                  </div>
                </div>
              </div>
          </div>
          {/* personagens */}
          <div className='sm:absolute sm:w-full sm:flex sm:flex-col sm:items-center sm:z-10 max-md:hidden'>
                  <div className='ml-[30rem] mb-[75rem]'>
                    <div className='-ml-[40rem] mt-[30rem]'><Characters/></div>
                    <div className='-ml-[50rem] -mt-[4rem]'><Characters/></div>
                    <div className='ml-[32rem] -mt-[5rem]'><Characters/></div>
                    <div className='ml-[25rem] mt-[35rem]'><Characters/></div>
                    <Image src="/assets/icons/otom/Grass.svg" width={1200} height={1200} className='max-sm:hidden absolute pointer-events-none ml-[30rem] z-0 mt-[0rem]'/>
                    <Image src="/assets/icons/otom/Grass.svg" width={1200} height={1200} className='max-sm:hidden absolute pointer-events-none -ml-[100rem] z-0 mt-[0rem]'/>
                  </div>
                </div>
                <div className='absolute w-full flex flex-col items-center z-10 max-sm:hidden'>
                  <div className='ml-[35rem] -mb-[23rem]'>
                    <div className='-ml-[36rem] mt-[25rem]'><Characters/></div>
                    <div className='-ml-[50rem] mt-[25rem]'><Characters/></div>
                    <div className='ml-[42rem] mt-[25rem]'><Characters/></div>
                    <div className='ml-[30rem] mt-[25rem]'><Characters/></div>
                    <div className='ml-[0rem] mt-[25rem]'><Characters/></div>
                    <div className='ml-[20rem] mt-[25rem]'><Characters/></div>
                  </div>
                </div>
         
          {/* parte 3 */}
          <div className='px-[20%] md:mt-20'>
            <h3 className='text-3xl dark:text-white text-center'>O que é OTOM?</h3>
            <div className='mt-20 space-y-12'>
              <div className='flex max-sm:flex-col max-sm:space-y-5 max-sm:justify-center justify-center space-x-20 items-center'>
                <p className='max-sm:text-center md:w-3/4 dark:text-white'><i>Over the Object Madness</i> é uma web série de animação onde objetos do cotidiano competem em um Reality Show pelo prêmio de um Hotel e um milhão de dólares.</p> 
                <div className='max-sm:hidden duration-200 ease-out flex border-b-[10px] dark:bg-slate-800 dark:border-slate-700 flex-col items-center justify-center bg-white border-4 border-black rounded-xl p-5 md:px-5 w-96'>
                  <h3 className='text-4xl dark:text-white font-bold'>5.704</h3>
                  <h4 className='text-xl dark:text-white'>Inscritos</h4>
                </div>
              </div>
              <div className='flex max-sm:flex-col max-sm:space-y-5 max-sm:justify-center justify-center space-x-20 items-center'>
                <p className='max-sm:text-center md:w-3/4 dark:text-white'>A comunidade interage diretamente com o resultado da série através ao sistema de eliminação. No final de cada episódio, os telespectadores podem votar em um dos perdedores para ser eliminado da série.</p> 
                <div className='max-sm:hidden duration-200 ease-out flex border-b-[10px] dark:bg-slate-800 dark:border-slate-700 flex-col items-center justify-center bg-white border-4 border-black rounded-xl p-5 md:px-5 w-96'>
                  <h3 className='text-4xl dark:text-white font-bold'>442,879</h3>
                  <h4 className='text-xl dark:text-white'>visualizações</h4>
                </div>
              </div>
              <div className='flex max-sm:flex-col max-sm:space-y-5 max-sm:justify-center justify-center space-x-20 items-center'>
                <p className='max-sm:text-center md:w-3/4 dark:text-white'>Criada em 2016, OTOM continua a cativar seu público com curtas divertidas, personagens engraçados e claro, participação ativa dos fãs.</p> 
                <div className='max-sm:hidden duration-200 ease-out flex border-b-[10px] dark:bg-slate-800 dark:border-slate-700 flex-col items-center justify-center bg-white border-4 border-black rounded-xl p-5 md:px-5 w-96'>
                  <h3 className='text-4xl dark:text-white font-bold'>1616</h3>
                  <h4 className='text-xl dark:text-white'>Votos</h4>
                </div>
              </div>
            </div>
          </div>
        {/* parte 4 */}
        <div className='flex flex-col justify-center items-center w-full py-40 space-y-5 bgblur mb-20'>
          {/* assets */}
          <div className='max-sm:hidden duration-200 ease-out bg-white dark:bg-slate-800 drop-shadow-md p-5 mt-48 rounded-3xl max-w-fit flex justify-between'>
            <div>
              <h3 className='text-2xl dark:text-white font-bold'>OTOM é Open Source.</h3>
              <p className='w-[39rem] dark:text-white '>Nós liberamos os arquivos fonte de OTOM para que você possa estudar e aprender a fazer suas próprias animações.</p>
              <a target="_blank" rel="noopener noreferrer"  href={'https://drive.google.com/drive/u/1/folders/1jPEaSmrXxMvIrjGyZRcV9OH_DX0ovaN8'}>
              <p className='group duration-200 ease-out drop-shadow-lg dark:text-white dark:border-white dark:bg-slate-800 cursor-pointer flex text-xl space-x-4 border-2 border-black p-3 px-5 w-max rounded-full mt-16 bg-white'><Image src='/assets/icons/otom/google-drive.svg' width={25} height={25} className='mr-3'/>Navegar pelos Arquivos <Image src='/assets/icons/arrow.svg' width={15} height={15} className='ease-out duration-200 dark:invert group-hover:translate-x-1 group-hover:-translate-y-1'/></p>
              </a>
            </div>
            <Image className="block dark:hidden" src="/assets/icons/otom/diamond select.png" width={185} height={160}/>
            <Image className="hidden dark:block" src="/assets/icons/otom/diamond select dark.png" width={185} height={160}/>
          </div>
          <div className='flex max-sm:flex-col max-sm:space-y-5 md:max-w-prose space-x-0'>
            {/* recomendar personagem */}
            <a target="_blank" rel="noopener noreferrer"  className="duration-200 ease-out bg-white dark:bg-slate-800 drop-shadow-md p-5 rounded-3xl space-y-5 md:-ml-9 max-sm:w-96 md:w-3/4" href="https://forms.gle/GreqFwivkC2wvd2a8">
                <h3 className='duration-200 ease-out font-bold text-2xl text-center	dark:text-white'>Gostaria de recomendar um personagem?</h3>
                <form className='w-full space-y-1 '>
                  <p className='dark:text-white'>Seu nome:</p>
                  <p className='duration-200 ease-out w-full border-2 border-slate-200 text-gray-300 dark:text-slate-600 dark:border-slate-600 rounded-md py-2 px-3'>Sérgio Sergipe</p>
                  <p className='dark:text-white'>Seu Objeto:</p>
                  <p className='duration-200 ease-out w-full text-gray-300 dark:text-slate-600 border-2 border-slate-200 dark:border-slate-600 rounded-md py-2 px-3'>máquina de lavar</p>
                  <button className='w-full border-2 border-black rounded-full py-1 px-2 flex w-min items-center dark:text-white dark:border-white'>Enviar <Image src='/assets/icons/arrow.svg' width={12} height={12} className='mx-2 mr-4 dark:invert'/></button>
                </form>
            </a>
            {/* discord */}
            <div className='duration-200 ease-out bg-white dark:bg-slate-800 drop-shadow-md md:ml-5 p-5 rounded-3xl max-sm:w-96 md:w-3/4 space-y-5 flex md:-ml-9 md:translate-x-10 flex-col justify-center items-center'>
              <h3 className='text-2xl font-bold text-center	dark:text-white'>Faça parte da nossa Comunidade</h3>
              <p className='text-center dark:text-white'>Participe de eventos, Converse com outros fans e assista à livestreams da produção de OTOM.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/cGzBFAYRr6">
              <p className='flex w-fit rounded-full bg-[#5865F2] text-white p-2 px-5 hover:px-7 duration-200 ease-out border-2 dark:border-white border-black'>  <Image src="/assets/icons/otom/discord.svg" className='mr-3' width={20} height={20}/>discord.gg/otom</p>
              </a>
            </div>
          </div>
          <div className='sm:flex sm:translate-y-5 sm:block hidden'>
            <div className='-ml-[16rem]'><Characters/></div>
            <div className='ml-[17rem] '><Characters/></div>
            <div className='ml-[17rem] '><Characters/></div>
            <div className='ml-[12rem] -mb-[5rem]'><Characters/></div>
          </div>
        </div>
        {/* redes sociais */}
        <div className='absolute w-full flex flex-col items-center -mb-[90rem] z-10'>
                  <div className='sm:ml-[35rem] sm:-mb-[312rem] max-sm:hidden'>
                    <div className='-ml-[44rem] mt-[20rem]'><Characters/></div>
                    <div className='-ml-[54rem] -mt-[15rem]'><Characters/></div>
                    <div className='ml-[42rem] mt-[20rem]'><Characters/></div>
                    <div className='ml-[30rem] mt-[32rem]'><Characters/></div>
                    <div className='ml-[40rem] mt-[37rem]'><Characters/></div>
                    <Image src="/assets/icons/otom/Grass.svg" width={1200} height={1200} className='max-sm:hidden absolute pointer-events-none ml-[30rem] z-0 mt-[0rem] -z-10'/>
                    <Image src="/assets/icons/otom/Grass.svg" width={1200} height={1200} className='max-sm:hidden absolute pointer-events-none -ml-[100rem] z-0 mt-[0rem] z-0'/>
                  </div>
                </div>
        <div className='max-sm:flex-col max-sm:space-y-5 max-sm:items-center flex space-x-5 mb-8 -mt-[2rem]'>
          <a target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/@OTOM2">
            <p className='text-xl flex w-max rounded-full bg-white dark:bg-slate-800 dark:text-white text-dyblack p-2 px-5 dark:hover:text-dyblue hover:text-dyblue duration-200 ease-out border-2 border-black'>  <Image src="/assets/icons/otom/youtube.svg" className='mr-3' width={20} height={20}/>@OTOM2</p>
          </a>
          <a target="_blank" rel="noopener noreferrer"  href="https://x.com/Object_Madness">
            <p className='text-xl flex w-max rounded-full bg-white dark:bg-slate-800 dark:text-white text-dyblack p-2 px-5 dark:hover:text-dyblue hover:text-dyblue duration-200 ease-out border-2 border-black'>  <Image src="/assets/icons/otom/twitter.svg" className='mr-3' width={20} height={20}/>@Object_Madness</p>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@overtheobjectmadness?lang=pt-BR">
            <p className='text-xl flex w-max rounded-full bg-white dark:bg-slate-800 dark:text-white text-dyblack p-2 px-5 dark:hover:text-dyblue hover:text-dyblue duration-200 ease-out border-2 border-black'>  <Image src="/assets/icons/otom/tiktok.svg" className='mr-3' width={20} height={20}/>@overtheobjectmadness</p>
          </a>
        </div>
        {/* rodapé */}
        <div className='w-full bg-dyblue dark:bg-slate-800 bluegrid rounded-t-3xl h-full bottom-0 px-[25%] py-8'>
          <div className='flex justify-between'>
            <p className='text-3xl otomtxt text-white'>OTOM</p>
            <div className='flex space-x-3'>
              <Link href="https://www.youtube.com/@OTOM2">
                <Image src="/assets/icons/otom/youtube.svg" className='bg-white rounded-full p-1 w-8 aspect-square' width={40} height={40}/>
              </Link>
              <Link href="https://x.com/Object_Madness">
                <Image src="/assets/icons/otom/twitter.svg" className='bg-white rounded-full p-1 w-8 aspect-square' width={40} height={40}/>
              </Link>
              <Link href="https://www.tiktok.com/@overtheobjectmadness?lang=pt-BR">
                <Image src="/assets/icons/otom/tiktok.svg" className='bg-white rounded-full p-1 w-8 aspect-square' width={30} height={30}/>
              </Link>
            </div>
          </div>
          <div className='max-sm:hidden w-full border-b-2 flex justify-between border-white pt-4'>
            <Link href={'/'}>
              <p className="text-white transition duration-200 ease-out logo mx-14">Home</p>
            </Link>
            <Link href={'/otom/wiki'}>
              <p className="text-white transition duration-200 ease-out mx-14">Wiki</p>
            </Link>
            <Link href={'/otom/blog'}>
              <p className="text-white transition duration-200 ease-out mx-14">Blog</p>
            </Link>
            <Link href={'https://drive.google.com/drive/u/1/folders/1jPEaSmrXxMvIrjGyZRcV9OH_DX0ovaN8'}>
              <p className="text-white transition duration-200 ease-out mx-14">Assets</p>
            </Link>
            <Link href={'/otom/jogos'}>
              <p className="text-white transition duration-200 ease-out mx-14">Jogos</p>
            </Link>
          </div>
          <p className='text-white text-xs mt-5'>2024 © Over The Object Madness. All rights reserved.</p>
        </div>
     
      </section>
    </>
  )
}
export default Otom;