'use client';

import Link from "next/link";
import Image from "next/image";

const AboutContent = ({image, title, text}) => {
    return (  
        <div className='w-full space-x-10 items-start flex h-max-fit'> 
            <Image className='h-full rounded-xl aspect-video' src={image} width={320} height={320}/>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AboutContent;