import React, { useState, useEffect } from 'react';

// Sample array of character image paths (replace with actual paths)
const characters = [
  '/assets/icons/otom/characters/frame 98.png',
  '/assets/icons/otom/characters/frame 99.png',
  '/assets/icons/otom/characters/frame 100.png',
  '/assets/icons/otom/characters/frame 101.png',
  '/assets/icons/otom/characters/frame 102.png',
  '/assets/icons/otom/characters/frame 103.png',
  '/assets/icons/otom/characters/frame 104.png',
  '/assets/icons/otom/characters/frame 105.png',
  '/assets/icons/otom/characters/frame 106.png',
  '/assets/icons/otom/characters/frame 107.png',
  '/assets/icons/otom/characters/frame 108.png',
  '/assets/icons/otom/characters/frame 109.png',
  '/assets/icons/otom/characters/frame 110.png',
  '/assets/icons/otom/characters/frame 111.png',
  '/assets/icons/otom/characters/frame 112.png',
  '/assets/icons/otom/characters/frame 113.png',
  '/assets/icons/otom/characters/frame 114.png',
  '/assets/icons/otom/characters/frame 115.png',
  '/assets/icons/otom/characters/frame 116.png',
  '/assets/icons/otom/characters/frame 117.png',
  '/assets/icons/otom/characters/frame 118.png',
  '/assets/icons/otom/characters/frame 119.png',
  '/assets/icons/otom/characters/frame 120.png',
  '/assets/icons/otom/characters/frame 121.png',
  '/assets/icons/otom/characters/frame 122.png',
  '/assets/icons/otom/characters/frame 123.png',
  '/assets/icons/otom/characters/frame 124.png',
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
    <Image src={character} className="aspect-auto max-w-52 max-h-52 absolute gelatine" alt="Character" />
  );
};

export default Characters;
