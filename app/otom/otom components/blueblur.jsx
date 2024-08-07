'use client';

import '../otom.css'
import Link from "next/link";
import Image from "next/image";

const BlueBlur = () => {
  return (
<div className="BlueBlur absolute blur-2xl w-full overflow-hidden flex justify-center items-center dark:opacity-15">
        <Image width={800} height={800} alt="blur" src="/assets/icons/otom/blue blur.svg" className="blur-2xl" />
    </div>

    
  );
};

export default BlueBlur;
