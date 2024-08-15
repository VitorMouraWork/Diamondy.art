'use client';

import Image from "next/image";

const CharacterInfo = ({name, image, icon, nickname, pronouns, species, voice, hobbies}) => {
    return (  
        <div className="flex max-sm:space-y-5 max-sm:flex-col text-center items-center items-center rounded-xl w-full ml-5 mb-5 justify-center md:space-x-5">
            <div className="flex flex-col my-0 md:space-y-6">
                <div className="flex flex-col bg-white dark:bg-slate-800 shadow-md md:rounded-xl items-center w-60">
                    <p className={`py-3 m-0 md:rounded-t-xl border-b-2 dark:border-slate-600 w-full top-0 text-center dark:text-white font-bold bg-slate-200 dark:bg-slate-700 px-3 mb-2`}>Apelidos</p>
                    <p className="dark:text-white my-2 text-center">{nickname}</p>
                </div>  

                <div className="flex flex-col bg-white dark:bg-slate-800 shadow-md md:rounded-xl items-center w-60">
                    <p className={`py-3 m-0 md:rounded-t-xl border-b-2 dark:border-slate-600 w-full top-0 text-center dark:text-white font-bold bg-slate-200 dark:bg-slate-700 px-3 mb-2`}>Pronomes</p>
                    <p className="dark:text-white my-2 text-center">{pronouns}</p>
                </div>  

                <div className="flex flex-col bg-white dark:bg-slate-800 shadow-md md:rounded-xl items-center w-60">
                    <p className={`py-3 m-0 md:rounded-t-xl border-b-2 dark:border-slate-600 w-full top-0 text-center dark:text-white font-bold bg-slate-200 dark:bg-slate-700 px-3 mb-2`}>Dublagem</p>
                    <p className="dark:text-white my-2 text-center">{voice}</p>
                </div> 
            </div>

            <div className="flex flex-col bg-white dark:bg-slate-800 shadow-md md:rounded-3xl max-sm:order-first">
                <p className={`text-2xl dark:text-white py-3 m-0 md:rounded-t-3xl border-b-2 dark:border-slate-600 w-full top-0 text-center bg-slate-200 dark:bg-slate-700 px-3 mb-2`}>{name}</p>
                <Image src={image} width={200} height={500} className="m-5 object-cover md:w-fit max-sm:w-55"/>
                <Image src={icon} width={70} height={70} className=" shadow-md aspect-square object-cover rounded-xl border-2 border-slate-100 dark:border-slate-700 absolute translate-y-2 -translate-x-9"/>
            </div>

            <div className="flex flex-col md:space-y-6">
                <div className="flex flex-col bg-white dark:bg-slate-800 shadow-md md:rounded-xl items-center w-60">
                    <p className={`py-3 m-0 md:rounded-t-xl border-b-2 dark:border-slate-600 w-full top-0 text-center dark:text-white font-bold bg-slate-200 dark:bg-slate-700 px-3 mb-2`}>Espécie</p>
                    <p className="dark:text-white my-2 text-center">{species}</p>
                </div>  

                <div className="flex flex-col bg-white dark:bg-slate-800 shadow-md md:rounded-xl items-center w-60">
                    <p className={`py-3 m-0 md:rounded-t-xl border-b-2 dark:border-slate-600 w-full top-0 text-center dark:text-white font-bold bg-slate-200 dark:bg-slate-700 px-3 mb-2`}>Hobbies</p>
                    <p className="dark:text-white text-center my-2">{hobbies}</p>
                </div>  
                
            </div>
              

        </div>
    );
};

export default CharacterInfo;
