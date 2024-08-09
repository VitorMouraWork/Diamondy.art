'use client';

import Header from '../../../components/Header';
import { React, useEffect, useState } from 'react';
import Head from 'next/head';

const Merge = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/games/Merge/styles.css" type="text/css" />
        <link rel="icon" href="/games/Merge/4.ico" type="image/vnd.microsoft.icon" />
        <title>merge</title>
        <script src="/games/merge/src/Runtime.js"></script>
      </Head>
      <Header/>
      <h1 className="flex w-full text-2xl my-3 self-center items-center justify-center">Merge</h1>
      <div className={'rounded-lg flex w-full self-center items-center justify-center'}>
        <iframe className="rounded-lg " src="https://cdm4-merge.netlify.app" width="1220" height="705" />
      </div>
      <div className='bggames opacity-70'></div>
      {/* Additional JSX content */}
    </>
  );
};

export default Merge;
