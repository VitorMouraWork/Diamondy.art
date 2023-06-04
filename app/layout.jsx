import Newsflash from '@/components/Newsflash';
import '../styles/globals.css'
import Header from '/components/Header';

export const metadata = {
  title: 'Diamondy.art',
  description: 'A Developers website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body><Header/>{children}<Newsflash/></body>
    </html>
  )
}
