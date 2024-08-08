'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Time from './time';
import '../styles/mobile.css';
import { useSound } from 'use-sound';

// Reusable component for delayed rendering and hiding of menu buttons
const StateComponent = ({ iconSrc, title }) => {
  const [isDelayedRendered, setIsDelayedRendered] = useState(false);

  useEffect(() => {
    // Delay rendering after 500 milliseconds
    const menuBtnElements = document.querySelectorAll('.MainMenu');
    const delayTimeout = setTimeout(() => {
      setIsDelayedRendered(true);
      menuBtnElements.forEach((element) => {
        element.classList.add('SuperHidden');
      });
    }, 500);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <div className="state-component"> {/* Add a class for styling */}
      {isDelayedRendered && (
        <>
          <div className='category flex flex-end space-x-2 items-end z-10'>
            <Image src={iconSrc} width={30} height={30} className="ml-28 mb-2" />
            <p className="text-xl text-white mb-2">{title}</p>
          </div>
        </>
      )}
    </div>
  );
};

const MessagesState = () => {
  const messages = [
    {
      title: '06/08/2024 Update',
      content: 'started working on the otom page. might be done by next week!',
    },
    {
      title: '09/11/2023 Update',
      content: 'yeah, im still trying to figure out how to make the music work...',
    },
    {
      title: '09/09/2023 Update',
      content: 'hey there! looks like you found the phone! this is the only feature added in this update.',
    },
    {
      title: 'hey there!',
      content: 'this is a test. might be removed later.',
    },
    {
      title: 'Diamondy.art',
      content: 'welcome to my website!',
    },
  ];

  const [selectedMessageIndex, setSelectedMessageIndex] = useState(0);

  // Handle up and down key presses to navigate between messages
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
      setSelectedMessageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === 'ArrowDown') {
      setSelectedMessageIndex((prevIndex) =>
        prevIndex < messages.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  useEffect(() => {
    // Add event listener for key presses
    document.addEventListener('keydown', handleKeyPress);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const translateY = selectedMessageIndex * -135;


 

  return (
    <div className='z-20'>
      <StateComponent
        iconSrc={"/assets/images/phone/icon_messages.png"}
        title="Messages"
        className="z-20"
      />
      <div
        className="messages-list flex-col flex items-center m-5 z-0"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: 'transform 0.2s ease-out', // Smooth ease-out transition
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message w-64 m-3 ${
              index === selectedMessageIndex ? 'messageSel' : ''
            }`}
            style={{
              zIndex: index === selectedMessageIndex ? '0' : '1', // Set z-index accordingly
            }}
          >
            <h1 className='text-xl p-2'>{message.title}</h1>
            <p className='p-5'>{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


 // ----music----

  // const [playMusic] = useSound(songs.audioSrc);
  // const [playMusic02] = useSound('/assets/music/DryRiver.mp3');
  // const [playMusic03] = useSound('/assets/music/More.mp3');
  // const [playMusic04] = useSound('/assets/music/HoldingIn.mp3');
  // const [playMusic05] = useSound('/assets/music/Short.mp3');
  // const [playMusic06] = useSound('/assets/music/Away.mp3');
  // const [playMusic07] = useSound('/assets/music/PeanutButter.mp3');
  // const [playMusic08] = useSound('/assets/music/Uno.mp3');
  // const [playMusic09] = useSound('/assets/music/SummerStreet.mp3');
  // const [playMusic10] = useSound('/assets/music/NothingAmazingHappensHere.mp3');
  // const [playMusic11] = useSound('/assets/music/SeasonEnd.mp3');
  // const [playMusic12] = useSound('/assets/music/NASdyRmx.mp3');
  // const [playMusic13] = useSound('/assets/music/FeelTheFunk.mp3');
  
const MusicState = () => {
  const songs = [
    {
      title: 'Cloudy Hills',
      album: 'Topic.',
      audioSrc: '../public/assets/music/CloudyHills.mp3',
    },
    {
      title: 'Dry River',
      album: 'Topic.',
      audioSrc: '../public/assets/music/DryRiver.mp3',
    },
    {
      title: 'More',
      album: 'Topic.',
      audioSrc: '../public/assets/music/More.mp3', 
    },
    {
      title: 'Holding In',
      album: 'Topic.',
      audioSrc: '../public/assets/music/HoldingIn.mp3'
    },
    {
      title: 'Short',
      album: 'Topic.',
      audioSrc: '../public/assets/music/Short.mp3'
    },
    {
      title: 'Away',
      album: 'Topic.',
      audioSrc: '../public/assets/music/Away.mp3'
    },
    {
      title: 'Peanut Butter',
      album: 'Topic.',
      audioSrc: '../public/assets/music/PeanutButter.mp3'
    },
    {
      title: 'Uno',
      album: 'Topic.',
      audioSrc: '../public/assets/music/Uno.mp3'
    },
    {
      title: 'Summer Street',
      album: 'Topic.',
      audioSrc: '../public/assets/music/SummerStreet.mp3'
    },
    {
      title: 'Nothing Amazing Happens Here',
      album: 'Topic.',
      audioSrc: '../public/assets/music/NothingAmazingHappensHere.mp3'
    },
    {
      title: 'Season End',
      album: 'Topic.',
      audioSrc: '../public/assets/music/SeasonEnd.mp3'
    },
    {
      title: "It Ain't Hard to Tell (DY RMX)",
      album: 'Topic.',
      audioSrc: '../public/assets/music/NASdyRmx.mp3'
    },
    {
      title: "Feel The Funk (Computer Love)",
      album: 'Sebastian Knight',
      audioSrc: '../public/assets/music/NAS dy Rmx.mp3'
    },
  ];

  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const audioRef = useRef(null);
  const [play, { stop, isPlaying }] = useSound(songs[selectedSongIndex].audioSrc);
  const [bounceAnimation, setBounceAnimation] = useState(false);
  



  useEffect(() => {
    // Clean up the audio when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle up and down key presses to navigate between songs
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
      setSelectedSongIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === 'ArrowDown') {
      setSelectedSongIndex((prevIndex) =>
        prevIndex < songs.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === 'ArrowRight') {
      if (!isPlaying) {
        // Play music using useSound when right arrow key is pressed for the selected song
        play()

        setBounceAnimation(true);
      setTimeout(() => {
        setBounceAnimation(false);
      }, 300);
      } else {
        // Stop playing the song
        stop()

        setBounceAnimation(true);
      setTimeout(() => {
        setBounceAnimation(false);
      }, 300);
      }
    }
  };

  useEffect(() => {
    // Add event listener for key presses
    document.addEventListener('keydown', handleKeyPress);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPlaying]);

  return (
    <div>
      <StateComponent
        iconSrc={"/assets/images/phone/icon_music.png"}
        title="Music"
      />
      <div
        className="songs"
        style={{
          transform: `translateY(${selectedSongIndex * -106}px)`,
          transition: 'transform 0.2s ease-out', // Smooth ease-out transition
        }}
      >
        {songs.map((song, index) => (
          <div
            key={index}
            className={`song flex ${index === selectedSongIndex ? 'selSong' : 'song'}`}
            style={{
              animation: index === selectedSongIndex && bounceAnimation ? 'bounceAnimation 0.3s' : 'none',
            }}
          >
            <div className={index === selectedSongIndex ? 'selDisc' : 'disc'}>
              {/* Add the spinning animation class based on playing status */}
              <div className={`discInner ${isPlaying && index === selectedSongIndex ? 'spin' : ''}`} />
            </div>
            <div className='songContent flex-col space-y-4 mt-5'>
              <p className={index === selectedSongIndex ? 'text-[#3159A5]' : 'text-white'}>{song.title}</p>
              <p className={index === selectedSongIndex ? 'text-white' : 'text-[#3159A5]'}>{song.album}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  };


  const GraffitiState = () => (
    <div>
      <StateComponent
        iconSrc={"/assets/images/phone/icon_graffiti.png"}
        title="Graffiti"
      />
  
      <div className='mt-20 text-white ml-10'>nothing to see here yet...</div>
    </div>
  );

const ExtrasState = () => (
  <div>
    <StateComponent
      iconSrc={"/assets/images/phone/icon_extras.png"}
      title="Extras"
    />

    <div className='mt-20 text-white ml-10'>nothing to see here yet...</div>
  </div>
);

const Phone = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const [bounceAnimation, setBounceAnimation] = useState(false);
  const [currentState, setCurrentState] = useState(null);

  useEffect(() => {
    // Move the menuBtnElements declaration inside the component
    const menuBtnElements = document.querySelectorAll('.MainMenu');

    const phoneElement = document.getElementById('phone');
  
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp' && !isActive) {
        // Activate the phone
        phoneElement.style.transition = 'bottom 0.3s ease-out';
        phoneElement.style.bottom = '0';
        setIsActive(true);
      }
  
      if (event.key === 'ArrowLeft') {
        if (!isActive) {
          // Activate the phone
          phoneElement.style.transition = 'bottom 0.3s ease-out';
          phoneElement.style.bottom = '0';
          setIsActive(true);
        } else if (currentState !== null) {
          // If a state is active, reset it to null (return to the main page)
          setCurrentState(null);
          menuBtnElements.forEach((element) => {
            element.classList.remove('SuperHidden');
          });
        } else {
          // Deactivate the phone and smoothly scroll it back down
          phoneElement.style.transition = 'bottom 0.3s ease-in';
          phoneElement.style.bottom = '-610px'; // Adjust this value as needed
          setIsActive(false);
        }

        // Prevent changing the selectedButton index when a state is active
        if (currentState === null) {
          if (selectedButton > 0) {
            setSelectedButton(selectedButton - 1);
          }
        }

        // Prevent closing the phone when a state is active
        if (currentState !== null) {
          event.preventDefault();
        }
      } else if (event.key === 'ArrowUp') {
        // Move "selected" div up
        if (selectedButton > 0) {
          setSelectedButton(selectedButton - 1);
        }
      } else if (event.key === 'ArrowDown') {
        // Move "selected" div down
        if (selectedButton < 3) {
          setSelectedButton(selectedButton + 1);
        }
      } else if (event.key === 'ArrowRight' && currentState == null) {
        // Perform specific actions based on the selectedButton index
        switch (selectedButton) {
          case 0:
            // Action for the first button (Messages)
            setCurrentState(<MessagesState />);
            break;
          case 1:
            // Action for the second button (Music)
            setCurrentState(<MusicState />);
            break;
          case 2:
            // Action for the third button (Graffiti)
            setCurrentState(<GraffitiState />);
            break;
          case 3:
            // Action for the fourth button (Extras)
            setCurrentState(<ExtrasState />);
            break;
          default:
            break;
        }

        // Apply the bounce animation by toggling the class
        setBounceAnimation(true);
        setTimeout(() => {
          setBounceAnimation(false);
        }, 300); // Adjust the duration of the bounce animation as needed
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isActive, selectedButton, currentState]);

  const selectedButtonStyle = {
    top: `${currentState === null ? 55 * selectedButton : 0}px`,
    transition: 'top 0.1s ease-out', // Apply a transition for smooth scrolling
  };

  const bounceClass = bounceAnimation ? 'bounce' : '';

  return (
    <div
      id="phone"
      className={`phone ${isActive ? '' : 'hidden'}`}
      onClick={() => {
        const phoneElement = document.getElementById('phone');
        if (!isActive) {
          phoneElement.style.transition = 'bottom 0.3s ease-out';
          phoneElement.style.bottom = '0';
          phoneElement.style.zIndex = '11';
          setIsActive(true);
        } else {
          // Deactivate the phone and smoothly scroll it back down
          phoneElement.style.transition = 'bottom 0.3s ease-in';
          phoneElement.style.bottom = '-610px'; // Adjust this value as needed
          setIsActive(false);
          setCurrentState(null); // Reset the current state
        }
      }}
    >
      <div className="phone w-[324px] h-[609px] absolute z-10"></div>

      <div className="phoneScreen w-[300px] h-[32rem]">
        <div className="header">
          <Time className="pt-3 text-lg text-white z-20" />
        </div>
        <div className="MainMenu map"></div>
        <div className="MainMenu details text-right">
          <p className="text-2xl text-white mr-16 pt-12">Navi-menu</p>
        </div>

        <div className="MainMenu menuButtons flex flex-col space-y-6 text-white">
          <div
            className={`selected ${bounceClass}`}
            style={{
              ...selectedButtonStyle,
              animation: bounceClass ? 'bounceAnimation 0.3s' : 'none',
            }}
          ></div>
          <button className="menuBtn text-xl flex items-center">
            <Image src={"/assets/images/phone/icon_messages.png"} width={30} height={30} className="mr-2" />Messages
          </button>
          <button className="menuBtn text-xl flex items-center">
            <Image src={"/assets/images/phone/icon_music.png"} width={30} height={30} className="mr-2" />Music
          </button>
          <button className="menuBtn text-xl flex items-center">
            <Image src={"/assets/images/phone/icon_graffiti.png"} width={25} height={20} className="mr-2" />Graffiti
          </button>
          <button className="menuBtn text-xl flex items-center">
            <Image src={"/assets/images/phone/icon_extras.png"} width={30} height={30} className="mr-2" />Extras
          </button>
        </div>
        {currentState && <div className="currentState">{currentState}</div>}
      </div>
    </div>
  );
};

export default Phone;

//bomb rush cyberfunk phone code by Diamondy copyright 2023