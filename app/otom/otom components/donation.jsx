"use client";
import { useState } from 'react';
import '../otom.css'
import Image from 'next/image';

const Donation = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed b-0 bottom-0 m-5 rounded-2xl right-0 self-right text-dyblack bg-white/80 backdrop-blur border-2 z-20 p-3 flex flex-col items-center">
            <div className='flex w-full justify-between items-start'>
                <p className="text-xl mb-5">Seja um patrocinador! 💎☄️</p>
                <button 
                    onClick={() => setVisible(false)} 
                    className='text-xl px-2 text-stone-300'
                >
                    X
                </button>
            </div>

            <p>gostaria de apoiar OTOM e outros projetos?</p>
            <p>considere fazer uma doação!</p>
            
            <Image src="/assets/images/pixdonate.png" width={200} height={200} alt="QR Code Pix" />
            
            <div className='flex mt-2'>
                <p>ou acesse</p> 
                <a 
                    className='ml-1.5 text-dyblue underline' 
                    target="_blank" 
                    rel="noopener noreferrer"  
                    href={'https://livepix.gg/diamondy'}
                >
                    este link
                </a>
            </div>
        </div>
    );
};

export default Donation;
