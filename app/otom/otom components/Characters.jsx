"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Sample array of character image paths (replace with actual paths)
const characters = [
  '/characters/Frame98.png',
  '/characters/Frame99.png',
  '/characters/Frame100.png',
  '/characters/Frame101.png',
  '/characters/Frame102.png',
  '/characters/Frame103.png',
  '/characters/Frame104.png',
  '/characters/Frame105.png',
  '/characters/Frame106.png',
  '/characters/Frame107.png',
  '/characters/Frame108.png',
  '/characters/Frame109.png',
  '/characters/Frame110.png',
  '/characters/Frame111.png',
  '/characters/Frame112.png',
  '/characters/Frame113.png',
  '/characters/Frame114.png',
  '/characters/Frame115.png',
  '/characters/Frame116.png',
  '/characters/Frame117.png',
  '/characters/Frame118.png',
  '/characters/Frame119.png',
  '/characters/Frame120.png',
  '/characters/Frame121.png',
  '/characters/Frame122.png',
  '/characters/Frame123.png',
  '/characters/Frame124.png',
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