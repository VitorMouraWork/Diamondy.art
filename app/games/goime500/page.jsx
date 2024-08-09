'use client';

import Header from '../../../components/Header';
import React, { useEffect } from "react";
import Head from "next/head";

const Goime500 = () => {
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/games/Merge/styles.css" type="text/css" />
        <link rel="icon" href="/games/Merge/4.ico" type="image/vnd.microsoft.icon" />
        <title>Goime 500</title>
        <script src="/games/merge/src/Runtime.js"></script>
      </Head>
        <Header/>
        <h1 className="flex w-full text-2xl my-3 self-center items-center justify-center">Goime 500</h1>
      <div className={'rounded-lg flex w-full self-center items-center justify-center'}>
      <iframe className="rounded-lg " src="https://goime500.netlify.app" width="996" height="500" />
    </div>
    <div className='bggames opacity-70'/>
    </>
  );
};

export default Goime500;
