'use client';

import Link from "next/link";
import Image from "next/image";

const AboutContent = ({image, title, text}) => {
    return (  
        <div className='w-full space-x-10 items-start mt-0 flex h-max-fit'> 
            <Image className='h-full rounded-xl aspect-video' src={image} width={320} height={320}/>
            <div>
                <p className="text-2xl">{title}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AboutContent;