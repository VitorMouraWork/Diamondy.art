import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Sample array of character image paths (replace with actual paths)
const characters = [
  '/characters/frame 98.png',
  '/characters/frame 99.png',
  '/characters/frame 100.png',
  '/characters/frame 101.png',
  '/characters/frame 102.png',
  '/characters/frame 103.png',
  '/characters/frame 104.png',
  '/characters/frame 105.png',
  '/characters/frame 106.png',
  '/characters/frame 107.png',
  '/characters/frame 108.png',
  '/characters/frame 109.png',
  '/characters/frame 110.png',
  '/characters/frame 111.png',
  '/characters/frame 112.png',
  '/characters/frame 113.png',
  '/characters/frame 114.png',
  '/characters/frame 115.png',
  '/characters/frame 116.png',
  '/characters/frame 117.png',
  '/characters/frame 118.png',
  '/characters/frame 119.png',
  '/characters/frame 120.png',
  '/characters/frame 121.png',
  '/characters/frame 122.png',
  '/characters/frame 123.png',
  '/characters/frame 124.png',
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
      <img src={character} alt="Character" className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>
    )
  );
};

export default Characters;


{/* <Image src={character} width={252} height={552} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/> */}