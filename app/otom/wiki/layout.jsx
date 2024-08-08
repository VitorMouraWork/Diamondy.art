import '../otom.css'
import Head from 'next/head';
import WikiHeader from './wiki components/WikiHeader';
import Darkmode from '../otom components/darkmode';

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
            <WikiHeader/>
            {children}
    </html>
  )
}
