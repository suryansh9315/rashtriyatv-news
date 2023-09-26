import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className=" mx-auto container shadow-md  flex flexWrap p-5 flex-col md:flex-row items-center">
                {/* m ite className="mr-5 hover:text-gray-900"ms-center textWh mb-4 md:mb-0"> */}
                <div className="mr-5 hover:text-gray-900">
                    <img src="/logo1.jpg" alt="" height={80} width={100} />
                    <Link href='/'><span className="ml-3 text-xl">RASHTRIYA TV</span></Link>
                </div>
                {/* </a> */}
                <nav className="md:ml-auto flex flexWrap items-center text-base justify-center">

                    <Link className="mr-5 hover:text-gray-900" href='/sports'>SPORTS</Link>
                    <Link className="mr-5 hover:text-gray-900" href='/business'>BUSINESS</Link>
                    <Link className="mr-5 hover:text-gray-900" href='/technology'>TECHNOLOGY</Link>
                    <Link className="mr-5 hover:text-gray-900" href='/national'>NATIONAL</Link>
                </nav>

            </div>
        </header>
    )
}

export default Header