'use client';

import React, { useEffect } from "react";
import Head from "next/head";

const Merge = () => {
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/games/Merge/styles.css" type="text/css" />
        <link rel="icon" href="/games/Merge/4.ico" type="image/vnd.microsoft.icon" />
        <title>merge</title>
        <script src="/games/merge/src/Runtime.js"></script>
      </Head>

        <h1 className="flex w-full text-2xl my-3 self-center items-center justify-center">Merge</h1>
      <div className={'rounded-lg flex w-full self-center items-center justify-center'}>
      <iframe className="rounded-lg " src="/public/games/Merge/index.html" width="1220" height="705" />
    </div>
    <div className='bggames opacity-70'/>
    </>
  );
};

export default Merge;
