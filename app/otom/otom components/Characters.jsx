"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Sample array of character image paths (replace with actual paths)
const characters = [
  <img src={'/characters/frame98.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame99.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame100.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame101.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame102.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame103.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame104.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame105.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame106.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame107.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame108.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame109.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame110.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame111.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame112.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame113.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame114.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame115.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame116.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame117.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame118.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame119.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame120.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame121.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame122.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame123.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
  <img src={'/characters/frame124.png'} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/>,
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
    character
  );
};

export default Characters;


{/* <Image src={character} width={252} height={552} className='aspect-auto max-w-52 max-h-52 absolute z-10 gelatine'/> */}