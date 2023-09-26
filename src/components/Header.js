import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className=" mx-auto container shadow-md  flex flexWrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center textWh mb-4 md:mb-0">
      <img src="/logo1.jpg" alt=""height={80} width={100} />
      <Link href='/'><span className="ml-3 text-xl">RASHTRIYA TV</span></Link>
    </a>
    <nav className="md:ml-auto flex flexWrap items-center text-base justify-center"> 
        
    <a className="mr-5 hover:text-gray-900"><Link href='/sports'>SPORTS</Link></a>
      <a className="mr-5 hover:text-gray-900"><Link href='/business'>BUSINESS</Link></a>
      <a className="mr-5 hover:text-gray-900"><Link href='/technology'>TECHNOLOGY</Link></a>
      <a className="mr-5 hover:text-gray-900"><Link href='/national'>NATIONAL</Link></a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Header