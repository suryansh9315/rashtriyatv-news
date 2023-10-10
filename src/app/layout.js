import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Rashtriya TV',
  description: '',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
      
        <Header />
        <Navbar />
        
      
        {children}
        
        <Footer />
        </body>
    </html>
  )
}
