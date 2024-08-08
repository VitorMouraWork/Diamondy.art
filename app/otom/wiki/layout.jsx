import '../otom.css'
import Head from 'next/head';
import WikiHeader from './wiki components/WikiHeader';
import Darkmode from '../otom components/darkmode';
import Provider from '../otom components/Provider';

export const metadata = {
  title: 'OTOM Wiki',
  description: 'a wiki oficial de OTOM!',
  openGraph: {
    title: 'Over the Object Madness Wiki',
    description: 'a wiki oficial de OTOM!',
    url: 'https://www.diamondy.art.br',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <Head>
      </Head>
      <Provider>
      <body className='lightgrid bg:white dark:bg-[#0C1222] h-full'>
          <Darkmode/>
            <WikiHeader/>
            {children}
      </body>
      </Provider>
    </html>
  )
}
