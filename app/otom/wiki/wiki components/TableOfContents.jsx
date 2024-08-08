'use client';

import { useState } from "react";
import { useMDXComponents } from '@mdx-js/react';
import { useEffect } from "react";
import Image from "next/image";

const TableOfContents = ({ content }) => {
    const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Captura todos os headings após a renderização completa da página
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));

    // Mapeia os headings para extrair o ID, título e nível
    const extractedHeadings = headingElements.map((heading) => ({
      id: heading.id,
      title: heading.innerText,
      level: Number(heading.tagName.replace('H', '')),
    }));

    setHeadings(extractedHeadings);
  }, []); // Executa o efeito apenas uma vez após o primeiro render
    
    
    const [isHidden, setIsHidden] = useState(false);

    const toggleListVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (  
        <div className='duration-200 ease-out mb-10 w-fit space-x-10 flex flex-col w-min-96 bg-white dark:bg-slate-800 drop-shadow-lg rounded-3xl p-5 space-y-2'> 
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center px-y">
                    <Image className="mr-2 brightness-0 dark:brightness-200 my-0" src="/assets/icons/otom/list.svg" width={22} height={22}/> 
                    <p className="text-xl dark:text-white mr-2 my-0">Conteúdo</p>
                </div>

                <button onClick={toggleListVisibility} className=" text-dyblue text-xs">
                    {isHidden ? '[mostrar]' : '[esconder]'}
                </button>
            </div>
            <hr className={isHidden ? 'hidden my-0 mx-0' : 'my-0 mx-0'}></hr>
            <ol className={isHidden ? 'hidden flex flex-col' : 'my-0 ml-0 flex flex-col'}>
                {headings.map((heading, index) => (
                    <li key={index} className={`ml-${heading.level * 2}`}>
                        <a href={`#${heading.id}`}>{heading.title}</a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TableOfContents;