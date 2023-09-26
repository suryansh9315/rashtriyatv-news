"use client"
import Image from 'next/image'
import Link from 'next/link'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useRef } from 'react';


export default function Home() {
    const sliderRef = useRef(null); // Create a ref for the slider container

    const slideLeft = () => {
        // Use the ref to access the slider container
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 500;
        }
    };

    const slideRight = () => {
        console.log("first")
        // Use the ref to access the slider container
        if (sliderRef.current) {
          sliderRef.current.scrollLeft += 500;
        }
    };


    return (

        <main className="container mx-auto w-full mt-8 px-4">
            <div onClick={() => {
                console.log("first")
            }} className="text-white-500 m-auto p-4 overflow-hidden shadow-orange-50 cursor-pointer"><span>BREAKING NEWS</span></div>
            <MdChevronLeft size={80} onClick={slideLeft} className='' />
           
            <div id='slider' ref={sliderRef} className="flex overflow-x-scroll scroll-smooth space-x-4 p-4 ">

                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>

            </div>
            <MdChevronRight size={80} onClick={slideRight} className='ml-auto' />

            <div className="text-white-500 p-4"><span>BREAKING NEWS</span></div>
            <div className="flex overflow-x-scroll space-x-4 p-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>

            </div>



        </main>
    )
}
