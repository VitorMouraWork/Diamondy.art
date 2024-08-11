"use client";

import '../otom.css';
import Link from 'next/link';
import Image from 'next/image';
import WikiHeader from './wiki components/WikiHeader';
import TableOfContents from './wiki components/TableOfContents';
import FunFacts from './wiki components/FunFacts';
import AboutContent from './wiki components/AboutContent.jsx';

const OtomWiki = () => {
  return (
    <>
    <WikiHeader/>
      <section className="w-full h-full z-10 flex flex-col items-center justify-center">     
        {/* parte 1 */}
        <div className='flex flex-col justify-center items-center w-full py-40 space-y-3 bgblur'>
          {/* assets */}
          <div className='duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-5 rounded-3xl w-[80rem] max-w-[80rem] space-y-5'>
              <Image className={"self-center translate-y-5"} src="/assets/icons/otom/otom wiki.svg" width={420} height={420}/>
              <p className='self-center dark:text-white'>Wiki Oficial de Over the Object Madness</p>
              <hr className='dark:opacity-20'></hr>
              <div className='w-full justify-between px-24 flex'>
                <Link className="text-dyblue flex" href={"/otom/wiki/sobre"}><Image className="mx-1" src="/assets/icons/otom/info.svg" width={18} height={18}/> Sobre</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/personagens"}><Image className="mx-1" src="/assets/icons/otom/diamond.svg" width={18} height={18}/>Personagens</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/episodios"}><Image className="mx-1" src="/assets/icons/otom/list.svg" width={18} height={18}/>Episódios</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/curtas"}><Image className="mx-1" src="/assets/icons/otom/video.svg" width={18} height={18}/>Curtas</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/extras"}><Image className="mx-1" src="/assets/icons/otom/sparkle.svg" width={18} height={18}/>Extras</Link> 
                <Link className="text-dyblue flex" href={"/otom/wiki/contribuir"}><Image className="mx-1" src="/assets/icons/otom/pencil.svg" width={18} height={18}/>Como contribuir</Link>
              </div>
          </div>
          <div className='inter font-inter prose prose-slate dark:prose-invert duration-200 flex flex-col ease-out bg-white dark:bg-slate-900 drop-shadow-md p-10 rounded-3xl w-[80rem] max-w-[80rem] space-y-5'>
            <h1>Página inicial</h1>
            <p>Bem-vindo à Wiki Oficial de OTOM! Este é o seu guia definitivo para tudo relacionado a Over the Object Madness! Aqui, você encontrará informações detalhadas sobre os personagens, episódios, locais e muito mais.</p>
            <Image src="/assets/icons/otom/otoms.png" width={5600} height={700} className="w-full"/>
            <hr></hr>
            <TableOfContents/>

            <h2>Episódio mais recente:</h2>
            <AboutContent 
                image="https://img.youtube.com/vi/1iNW3b7ioxI/maxresdefault.jpg" 
                link="https://www.youtube.com/watch?v=1iNW3b7ioxI"
                title="OTOM 13: Ora seu!" 
                text="Ora seu! é o décimo terceiro episódio de otom. ele lançou no dia 10 de Maio de 2024 no YouTube. O episódio começa com Grandão e Estagiário chegando em um estabelecimento desconhecido, com o objetivo de discutir negócios. depois é revelado que os personagens do estabelecimento são os debuters do episódio 6." 
            />
            <hr></hr>

            <h2>Vídeo mais recente:</h2>
            <AboutContent 
                image="https://img.youtube.com/vi/ZqD2OkNn8K8/maxresdefault.jpg" 
                link="https://www.youtube.com/watch?v=ZqD2OkNn8K8"
                title="Como animar igual OTOM - Terceira Temporada" 
                text="Este vídeo lançou no dia 18 de Julho de 2024 no YouTube. Este vídeo é um guia de como animar no estilo da terceira temporada de otom. ele foi feito para recrutar possíveis animadores para contribuir com a animação da terceira temporada." 
            />
            
            <p>Se você é novo no universo de OTOM ou um fã de longa data, esta wiki é o lugar perfeito para descobrir curiosidades, explorar teorias e ficar por dentro de tudo o que acontece na série.</p>
            <hr></hr>
            <FunFacts count={5}/>
            <p className='opacity-25 text-xs translate-y-5'>O conteúdo da wiki está disponível sob CC-BY-SA. © Over the Object Madness 2024</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default OtomWiki;