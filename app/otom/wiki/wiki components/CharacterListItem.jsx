'use client';

import Link from "next/link";
import Image from "next/image";

const CharacterListItem = ({image, icon, link, name}) => {
    return (  
            <Link href={link} className="no-underline group flex flex-col items-center">
                <Image src={image} width={150} height={150} className="my-0 border-gray-300 group:hover:shadow-xl shadow-md rounded-xl mx-0"/>
                <div className="flex space-x-2 items-center">
                    <Image src={icon} width={15} height={15}/>
                    <p className="text-dyblue">{name}</p>
                </div>
            </Link>
    );
};

export default CharacterListItem;