"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import frame98 from '../../../public/characters/frame98.png';

// Sample array of character image paths (replace with actual paths)
const characters = [
  {frame98},
  '/characters/frame99.png',
  '/characters/frame100.png',
  '/characters/frame101.png',
  '/characters/frame102.png',
  '/characters/frame103.png',
  '/characters/frame104.png',
  '/characters/frame105.png',
  '/characters/frame106.png',
  '/characters/frame107.png',
  '/characters/frame108.png',
  '/characters/frame109.png',
  '/characters/frame110.png',
  '/characters/frame111.png',
  '/characters/frame112.png',
  '/characters/frame113.png',
  '/characters/frame114.png',
  '/characters/frame115.png',
  '/characters/frame116.png',
  '/characters/frame117.png',
  '/characters/frame118.png',
  '/characters/frame119.png',
  '/characters/frame120.png',
  '/characters/frame121.png',
  '/characters/frame122.png',
  '/characters/frame123.png',
  '/characters/frame124.png',
];

const usedCharacters = new Set(); // To keep track of used characters

const getRandomCharacter = () => {
  if (usedCharacters.size === characters.length) {
    usedCharacters.clear(); // Reset if all characters have been used
  }

  let character;
  do {
    character = characters[Math.floor(Math.random() * characters.length)];
  } while (usedCharacters.has(character));

  usedCharacters.add(character);
  return character;
};

const Characters = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const randomCharacter = getRandomCharacter();
    setCharacter(randomCharacter);
  }, []);

  return (
    character && (
      <img src={character} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>
    )
  );
};

export default Characters;


{/* <Image src={character} width={252} height={552} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/> */}