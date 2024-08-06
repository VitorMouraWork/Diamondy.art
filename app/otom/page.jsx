"use client";

import Link from 'next/link';
import Image from 'next/image';
import BlueBlur from './otom components/blueblur';
import OtomNews from './otom components/OtomNews';

const Otom = () => {
  return (
    <>
    <BlueBlur/>
      <section className="w-full h-full z-10 mt-32 flex flex-col items-center justify-center">
        
        <OtomNews/>

        {/* parte 1 */}
          <div className='grassBg w-full px-[20%] mt-36'>
              <div className='flex z-10 w-full justify-center flex-col items-center -translate-y-20 flex'>
                <Image className={"mx-3 mb-14"} src="/assets/icons/otom/OTOM.svg" width={420} height={420}/>
                <h1 className='-translate-y-16 text-dyblack text-2xl'>Over the Object Madness</h1>

                <button className='flex justify-center duration-75 items-center mt-10 border-2 border-black rounded-full px-5 hover:px-6 py-3'> Assista o último episódio <Image src="/assets/icons/arrow.svg" width={15} height={15} className='ml-3'/></button>
              </div>

              {/* parte 2 */}
              <div class="flex flex-col w-full items-center justify-center mt-20 mb-40">
                <div className=' p-5 py-1 border-black border-2 rounded-2xl'>
                  <h2 className='text-xl mb-1'>Último lançamento:</h2> 
                  <iframe className='rounded-xl' width="1080" height="650" src="https://www.youtube.com/embed/ZqD2OkNn8K8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <div className='flex w-full justify-between'>
                    <h2 className='text-3xl my-2'>OTOM 12: O Tombo</h2>
                    <p className='text-gray-300 text-xl mt-2'>18 de jul. de 2024</p>
                  </div>
                </div>
              </div>
          </div>
            
          {/* parte 3 */}
          <div className='px-[20%] mt-20'>
            <h3 className='text-3xl text-center'>O que é OTOM?</h3>
            <div className='mt-20 space-y-12'>
              <div className='flex justify-center space-x-20 items-center'>
                <p className='w-3/4'><i>Over the Object Madness</i> é uma web série de animação onde objetos do cotidiano competem em um Reality Show pelo prêmio de um Hotel e um milhão de dólares.</p> 
                <div className='flex border-b-[10px] flex-col items-center justify-center bg-white border-4 border-black rounded-xl p-5 px-5 w-96'>
                  <h3 className='text-4xl font-bold'>3.702</h3>
                  <h4 className='text-xl'>Inscritos</h4>
                </div>
              </div>

              <div className='flex justify-center space-x-20 items-center'>
                <p className='w-3/4'>A comunidade interage diretamente com o resultado da série através ao sistema de eliminação. No final de cada episódio, os telespectadores podem votar em um dos perdedores para ser eliminado da série.</p> 
                <div className='flex border-b-[10px] flex-col items-center justify-center bg-white border-4 border-black rounded-xl p-5 px-5 w-96'>
                  <h3 className='text-4xl font-bold'>315.282</h3>
                  <h4 className='text-xl'>visualizações</h4>
                </div>
              </div>

              <div className='flex justify-center space-x-20 items-center'>
                <p className='w-3/4'>Criada em 2016, OTOM continua a cativar seu público com curtas divertidas, personagens engraçados e claro, participação ativa dos fãs.</p> 
                <div className='flex border-b-[10px] flex-col items-center justify-center bg-white border-4 border-black rounded-xl p-5 px-5 w-96'>
                  <h3 className='text-4xl font-bold'>1616</h3>
                  <h4 className='text-xl'>Votos</h4>
                </div>
              </div>
            </div>
          </div>

        {/* parte 4 */}
        <div className='flex flex-col justify-center items-center w-full py-40 space-x-5 space-y-5 bgblur mb-20'>
          {/* assets */}
          <div className='bg-white drop-shadow-md p-5 rounded-3xl max-w-fit flex justify-between'>
            <div>
              <h3 className='text-2xl font-bold'>OTOM é Open Source.</h3>
              <p className='w-[39rem]'>Nós liberamos os arquivos fonte de OTOM para que você possa estudar e aprender a fazer suas próprias animações.</p>
              <Link href={'https://drive.google.com/drive/u/1/folders/1jPEaSmrXxMvIrjGyZRcV9OH_DX0ovaN8'}>
              <p className='duration-200 drop-shadow-lg ease-out cursor-pointer flex text-xl space-x-4 border-2 border-black p-3 px-5 w-max rounded-full mt-16 bg-white hover:bg-otomblue'><Image src='/assets/icons/otom/google-drive.svg' width={25} height={25} className='mr-3'/>Navegar pelos Arquivos <Image src='/assets/icons/arrow.svg' width={15} height={15}/></p>
              </Link>
            </div>
            <Image src="/assets/icons/otom/diamond select.png" width={185} height={160}/>
          </div>

          <div className='flex max-w-prose'>
            {/* recomendar personagem */}
            <Link className="bg-white drop-shadow-md p-5 rounded-3xl space-y-5 -ml-5 w-1/2" href="https://forms.gle/GreqFwivkC2wvd2a8">
                <h3 className='font-bold text-2xl text-center	'>Gostaria de recomendar um personagem?</h3>
                <form className='w-full space-y-1 '>
                  <p>Seu nome:</p>
                  <p className='w-full border-2 border-slate-200 text-gray-300 rounded-md py-2 px-3'>Sérgio Sergipe</p>

                  <p>Seu Objeto:</p>
                  <p className='w-full text-gray-300 border-2 border-slate-200 rounded-md py-2 px-3'>máquina de lavar</p>
                  <button className='w-full border-2 border-black rounded-full py-1 px-2 flex w-min items-center'>Enviar <Image src='/assets/icons/arrow.svg' width={12} height={12} className='mx-2 mr-4'/></button>
                </form>
            </Link>

            {/* discord */}
            <div className='bg-white drop-shadow-md ml-5 p-5 rounded-3xl w-1/2 space-y-5 flex flex-col justify-center items-center'>
              <h3 className='text-2xl font-bold text-center	'>Faça parte da nossa Comunidade</h3>
              <p className='text-center'>Participe de eventos, Converse com outros fans e assista à livestreams da produção de OTOM.</p>
              <Link href="https://discord.gg/otom">
              <p className='flex w-fit rounded-full bg-[#5865F2] text-white p-2 px-5 hover:px-7 duration-200 ease-out border-2 border-black'>  <Image src="/assets/icons/otom/discord.svg" className='mr-3' width={20} height={20}/>discord.gg/otom</p>
              </Link>
            </div>
          </div>
        </div>

        {/* redes sociais */}
        <div className='flex space-x-5 mb-9'>
          <Link href="https://www.youtube.com/@OTOM2">
            <p className='text-xl flex w-max rounded-full bg-white text-dyblack p-2 px-5 hover:text-dyblue duration-200 ease-out border-2 border-black'>  <Image src="/assets/icons/otom/youtube.svg" className='mr-3' width={20} height={20}/>@OTOM2</p>
          </Link>

          <Link href="https://x.com/Object_Madness">
            <p className='text-xl flex w-max rounded-full bg-white text-dyblack p-2 px-5 hover:text-dyblue duration-200 ease-out border-2 border-black'>  <Image src="/assets/icons/otom/twitter.svg" className='mr-3' width={20} height={20}/>@Object_Madness</p>
          </Link>

          <Link href="https://www.tiktok.com/@overtheobjectmadness?lang=pt-BR">
            <p className='text-xl flex w-max rounded-full bg-white text-dyblack p-2 px-5 hover:text-dyblue duration-200 ease-out border-2 border-black'>  <Image src="/assets/icons/otom/tiktok.svg" className='mr-3' width={20} height={20}/>@overtheobjectmadness</p>
          </Link>
        </div>

        {/* rodapé */}
        <div className='w-full bluegrid rounded-t-3xl bottom-0 px-[25%] py-8'>
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
          <div className='w-full border-b-2 flex justify-between border-white pt-4'>
            <Link href={'/'}>
              <p className="text-white transition duration-200 ease-out logo mx-14">Home</p>
            </Link>
            <Link href={'/otom/wiki'}>
              <p className="text-white transition duration-200 ease-out mx-14 before:content-['Wiki'] hover:before:content-['Em_Breve!']"></p>
            </Link>
            <Link href={'/otom/blog'}>
              <p className="text-white transition duration-200 ease-out mx-14 before:content-['Blog'] hover:before:content-['Em_Breve!']"></p>
            </Link>
            <Link href={'https://drive.google.com/drive/u/1/folders/1jPEaSmrXxMvIrjGyZRcV9OH_DX0ovaN8'}>
              <p className="text-white transition duration-200 ease-out mx-14">Assets</p>
            </Link>
            <Link href={'/otom/jogos'}>
              <p className="text-white transition duration-200 ease-out mx-14 before:content-['Jogos'] hover:before:content-['Em_Breve!']"></p>
            </Link>
          </div>
          <p className='text-white text-xs mt-5'>2024 © Over The Object Madness. All rights reserved.</p>
        </div>
        

      </section>
    </>
  )
}

export default Otom;