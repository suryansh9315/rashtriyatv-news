import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className=" text-gray-600 body-font">


            <div className=" mx-auto container shadow-md  flex flexWrap p-5 flex-col md:flex-row items-center">
                <img src="/logo1.jpg" alt="" height={80} width={100} />
                <Link href='/' className="flex title-font font-medium items-center textWh mb-4 md:mb-0 ml-3 text-xl">

                    RASHTRIYA TV</Link>




            </div>
        </header>
    )
}

export default Header