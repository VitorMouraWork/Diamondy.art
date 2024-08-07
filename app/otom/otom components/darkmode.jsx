'use client';

import '../otom.css'
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Darkmode = () => {
    const{ systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="flex justify-end items-end fixed z-20 w-full top-0 p-5">
        {currentTheme === 'dark' ? (
            <Image onClick={() => setTheme('light')} className='self-center' role="button" src="/assets/icons/otom/lightmode.svg" alt="Light Mode" width={20} height={20}/>
        ) : (
            <Image onClick={() => setTheme('dark')} className='self-center' role="button" src="/assets/icons/otom/darkmode.svg" alt="Dark Mode" width={20} height={20}/>
        )}
    </div>
  );
};

export default Darkmode;
