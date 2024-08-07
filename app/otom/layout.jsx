import './otom.css'
import Head from 'next/head';
import OtomHeader from './otom components/OtomHeader';
import Darkmode from './otom components/darkmode';
import Provider from './otom components/Provider';

export const metadata = {
  title: 'OTOM',
  description: 'OTOM website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="./otomfavicon.ico" />
        <meta property="og:url" content="https://www.diamondy.art.br/otom"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Over the Object Madness"/>
        <meta property="og:description" content="o site oficial de OTOM!"/>
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/d36519b3-8484-4fe2-b637-74e162149f12.png?token=IPXlh_EvHMdzCGUfIrB5qIw8R1dGut9LVT3UKIcn-Tg&height=324&width=476&expires=33259057032"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="diamondy.art.br"/>
        <meta property="twitter:url" content="https://www.diamondy.art.br/otom"/>
        <meta name="twitter:title" content="Over the Object Madness"/>
        <meta name="twitter:description" content="o site oficial de OTOM!"/>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/d36519b3-8484-4fe2-b637-74e162149f12.png?token=IPXlh_EvHMdzCGUfIrB5qIw8R1dGut9LVT3UKIcn-Tg&height=324&width=476&expires=33259057032"/>
      </Head>
      <Provider>
      <body className='lightgrid bg:white dark:bg-[#0C1222] h-full'>
          <Darkmode/>
            <OtomHeader/>
            {children}
      </body>
      </Provider>
    </html>
  )
}
