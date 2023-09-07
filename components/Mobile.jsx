'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Time from './time';
import '../styles/mobile.css';

const Phone = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedButton, setSelectedButton] = useState(0);

    useEffect(() => {
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
                } else {
                    // Deactivate the phone and smoothly scroll it back down
                    phoneElement.style.transition = 'bottom 0.3s ease-in';
                    phoneElement.style.bottom = '-610px'; // Adjust this value as needed
                    setIsActive(false);
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
            } else if (event.key === 'ArrowRight') {
                // Perform specific actions based on the selectedButton index
                switch (selectedButton) {
                    case 0:
                        // Action for the first button (Messages)
                        // You can add your custom code here
                        break;
                    case 1:
                        // Action for the second button (Music)
                        // You can add your custom code here
                        break;
                    case 2:
                        // Action for the third button (Graffiti)
                        // You can add your custom code here
                        break;
                    case 3:
                        // Action for the fourth button (Extras)
                        // You can add your custom code here
                        break;
                    default:
                        break;
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isActive, selectedButton]);

    const selectedButtonStyle = {
        top: `${55 * selectedButton}px`,
        transition: 'top 0.1s ease-out', // Apply a transition for smooth scrolling
    };

    return (
        <div
            id="phone"
            className={`phone ${isActive ? '' : 'hidden'}`}
            onClick={() => {
                const phoneElement = document.getElementById('phone');
                if (!isActive) {
                    // Activate the phone
                    phoneElement.style.transition = 'bottom 0.3s ease-out';
                    phoneElement.style.bottom = '0';
                    phoneElement.style.zIndex = '11';
                    setIsActive(true);
                } else {
                    // Deactivate the phone and smoothly scroll it back down
                    phoneElement.style.transition = 'bottom 0.3s ease-in';
                    phoneElement.style.bottom = '-610px'; // Adjust this value as needed
                    setIsActive(false);
                }
            }}
        >
            <div className="phone w-[324px] h-[609px] absolute z-10"></div>

            <div className="phoneScreen w-[300px] h-[32rem]">
                <div className="header">
                    <Time className="pt-3 text-lg text-white" />
                </div>
                <div className="map"></div>
                <div className="details text-right">
                    <p className="text-2xl text-white mr-16 pt-12">Navi-menu</p>
                </div>

                <div className="menuButtons flex flex-col space-y-6 text-white">
                    <div className="selected" style={selectedButtonStyle}></div>
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
            </div>
        </div>
    );
};

export default Phone;
