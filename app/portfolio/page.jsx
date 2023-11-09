
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/globals.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [gridItems, setGridItems] = useState([]);

  const portfolioItems = [

    { id: 23, category: 'web', imageSrc: '/assets/images/gamr page.png', title: "Gamr landing page", date: "2023", href: 'https://www.behance.net/gallery/184216955/Gamr-Landing-page-Concept' },
    { id: 22, category: 'design', imageSrc: '/assets/images/logofolio.png', title: "", date: "2023", href: 'https://www.behance.net/gallery/183263025/Logos-Marks-Vol-01' },
    { id: 21, category: 'art', imageSrc: '/assets/images/case.png', title: "Case", date: "2023", href: 'https://twitter.com/DiamonDeezNuts/status/1708994239546143023/photo/1' },
    { id: 20, category: 'design', imageSrc: '/assets/images/gamr.png', title: "Gamr Video Editor", date: "2022", href: 'https://www.behance.net/gallery/177600505/Gamr-software-Design' },
    { id: 19, category: 'art', imageSrc: '/assets/images/mpe.png', title: "Mass Production Eva", date: "2023", href: 'https://twitter.com/Diamondyeet/status/1690849947061493760' },
    { id: 18, category: 'art', imageSrc: '/assets/images/boygenius.png', title: "", date: "2023", href: 'https://twitter.com/DiamonDeezNuts/status/1654714492498976768/photo/1' },
    { id: 17, category: 'art', imageSrc: '/assets/images/eva.jfif', title: "Eva Unit 02", date: "2023", href: 'https://twitter.com/Diamondyeet/status/1633880383698931713' },
    { id: 16, category: 'design', imageSrc: '/assets/images/Screenshot_1.png', title: "emojis", date: "2022", href: 'https://www.behance.net/gallery/144053481/Diamondy-Brand-Identity' },
    { id: 15, category: 'design', imageSrc: '/assets/images/topic.png', title: "Topic.", date: "2023", href: 'https://youtu.be/iAQ6S8NLqkU' },
    { id: 14, category: 'design', imageSrc: '/assets/images/brand.png', title: "Diamondy Brand Identity", date: "2022", href: 'https://www.behance.net/gallery/144053481/Diamondy-Brand-Identity' },
    { id: 13, category: 'art', imageSrc: '/assets/images/dom.jpg', title: "DOM", date: "2022", href: 'https://twitter.com/Diamondyeet' },
    { id: 12, category: 'gamedev', imageSrc: '/assets/images/goime500.png', title: "Goime 500 Remake", date: "2021", href: '/games/goime500' },
    { id: 11, category: 'design', imageSrc: '/assets/images/qjo.png', title: "que?jo! card game", date: "2022", href: 'https://www.behance.net/gallery/181452643/Que-Jo-Card-game'},
    { id: 10, category: 'art', imageSrc: '/assets/images/stickers.jpg', title: "Stickers", date: "2023", href: 'https://dommissions.carrd.co' },
    { id: 9, category: 'art', imageSrc: '/assets/images/wasp.jpg', title: "Wasp", date: "2022", href: 'https://dommissions.carrd.co' },
    { id: 8, category: 'web', imageSrc: '/assets/images/webpage.jfif', title: "Diamondy.art", date: "2022", href: 'https://www.diamondy.art.br' },
    { id: 7, category: 'web', imageSrc: '/assets/images/raizgames.png', title: "Raiz Games", date: "2022", href: 'https://raizgames.netlify.app/index.html' },
    { id: 6, category: 'art', imageSrc: '/assets/images/lulege.jpg', title: "lulexi", date: "2022", href: 'https://twitter.com/Diamondyeet' },
    { id: 5, category: 'web', imageSrc: '/assets/images/cotemig.png', title: "cotemig landing page", date: "2022", href: 'https://cotemig-vitor.netlify.app' },
    { id: 4, category: 'art', imageSrc: '/assets/images/l4d.jpg', title: "Left 4 Dead", date: "2022", href: 'https://twitter.com/Diamondyeet' },
    { id: 3, category: 'art', imageSrc: '/assets/images/kold.jpg', title: "Kold", date: "2023", href: 'https://twitter.com/Diamondyeet' },
    { id: 2, category: 'gamedev', imageSrc: '/assets/images/merge.png', title: "CDM4: Merge", date: "2023", href: '/games/merge' },
    { id: 1, category: 'gamedev', imageSrc: '/assets/images/fishclicker2.png', title: "Fish Clicker", date: "2022", href: 'https://fishclicker.netlify.app/' },
  ];
  
  const shuffledPortfolioItems = [...portfolioItems].sort(() => Math.random() - 0.5);

  const filterItems = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const filteredItems = shuffledPortfolioItems.filter(
      (item) => selectedCategory === 'all' || selectedCategory === item.category
    );
    setGridItems(filteredItems);
  }, [selectedCategory]);

  const gridRef = useRef(null);

  useEffect(() => {
    const gridContainer = gridRef.current;
    if (gridContainer) {
      const scrollInterval = setInterval(() => {
        gridContainer.scrollTop += 1;
      }, 100);

      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, []);

  return (
    <>
      <section className="w-full z-10 flex-col h-full px-30">
        <div className="flex fixed z-10 ml-40 mt-8">
          <h1 translate="no" className="text-dyblack text-7xl">
            Portfolio
          </h1>
          <Image className="mx-3" src="/assets/icons/arrow.svg" width={30} height={30} />
        </div>
        <div className="flex fixed mt-32 z-10 px-30 ml-20 w-30%">
          <ul className="flex p-5 ">
            <li>
              <button
                className={`transition-all ease-out m-1 left-0 p-2 px-5 rounded-md bg-none active:bg-dyblue active:text-dywhite border-2 border-dyblue  ${
                  selectedCategory === 'all' ? 'bg-dyblue text-dywhite animate-pulse text-xl' : 'bg-dywhite text-dyblue text-xl'
                }`}
                onClick={() => filterItems('all')}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={`transition-all ease-out m-1 left-0 p-2 px-5 rounded-md bg-none active:bg-dyblue active:text-dywhite border-2 border-dyblue  ${
                  selectedCategory === 'art' ? 'bg-dyblue text-dywhite animate-pulse text-xl' : 'bg-dywhite text-dyblue text-xl'                
                }`}
                onClick={() => filterItems('art')}
              >
                Art
              </button>
            </li>
            <li>
              <button
                className={`transition-all ease-out m-1 left-0 p-2 px-5 rounded-md bg-none active:bg-dyblue active:text-dywhite border-2 border-dyblue  ${
                  selectedCategory === 'web' ? 'bg-dyblue text-dywhite animate-pulse text-xl' : 'bg-dywhite text-dyblue text-xl'
                }`}
                onClick={() => filterItems('web')}
              >
                Web
              </button>
            </li>
            <li>
              <button
                className={`transition-all ease-out m-1 left-0 p-2 px-5 rounded-md bg-none active:bg-dyblue active:text-dywhite border-2 border-dyblue  ${
                  selectedCategory === 'gamedev' ? 'bg-dyblue text-dywhite animate-pulse text-xl' : 'bg-dywhite text-dyblue text-xl'
                }`}
                onClick={() => filterItems('gamedev')}
              >
                Gamedev
              </button>
            </li>
            <li>
              <button
                className={`transition-all ease-out m-1 left-0 p-2 px-5 rounded-md bg-none active:bg-dyblue active:text-dywhite border-2 border-dyblue  ${
                  selectedCategory === 'design' ? 'bg-dyblue text-dywhite animate-pulse text-xl' : 'bg-dywhite text-dyblue text-xl'
                }`}
                onClick={() => filterItems('design')}
              >
                Design
              </button>
            </li>
          </ul>
        </div>
      </section>

  <div className="flex">
    <div ref={gridRef} className="flex-grow h-full overflow-y-auto p-10 w-full">
      <div className="h-full right-5 w-fit rtl space-x-reverse columns-2 gap-2 ml-auto">
        {gridItems.map((item) => (
          <div key={item.id} className="rounded shadow-md overflow-hidden mb-2 active:z-20 active:rounded-lg hover:scale-105 cursor-pointer transition-all ease-out bg-no-repeat bg-cover bg-white">
            <Link href={item.href} className="absolute z-10 bottom-2 end-3"><Image src="/assets/icons/link.png" width={20} height={20}/></Link>
            <div className='flex bottom-0 text-end align-text-bottom z-10 relative'>
              <p className='text-xl text-dywhite drop-shadow-lg start-3 drop-shadow-2xl absolute'>{item.title}</p>
              <p className='text-l text-dywhite drop-shadow-lg end-3 drop-shadow-2xl absolute'>{item.date}</p>
            </div>
            <Image src={item.imageSrc} width={350} height={250} className='active:scale-150 pointer-events-none'/>
            
          </div>
        ))}
      </div>
    </div>
</div>
<div className='bghome opacity-70'></div>
    </>
  );
};

export default Portfolio;



