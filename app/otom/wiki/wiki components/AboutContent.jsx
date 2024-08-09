'use client';

import Link from "next/link";
import Image from "next/image";

const AboutContent = ({image, link, title, text}) => {
    return (  
        <div className='w-full space-x-10 items-start mt-0 flex h-max-fit'> 
                <Image href={link} className='h-full rounded-xl aspect-video' src={image} width={320} height={320}/>
            <div>
                <Link href={link}><p className="text-2xl">{title}</p></Link>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AboutContent;