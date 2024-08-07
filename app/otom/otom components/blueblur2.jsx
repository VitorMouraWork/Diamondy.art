'use client';

import '@/styles/otom.css'
import Link from "next/link";
import Image from "next/image";
import BlueBlur from './blueblur';

const BlueBlur2 = () => {
  return (
<div className="absolute blur-2xl w-full scale-x-150 flex justify-center items-center">
        <BlueBlur/>
    </div>

    
  );
};

export default BlueBlur2;