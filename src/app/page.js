"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from "next/font/google";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import national from './national/page';

const poppins = Poppins({
    subsets:['latin'],
    style: ['normal'],
    weight :'700',
  })

export default function Home() {
    
    return (
        <main className="container mx-auto w-full mt-8 px-4">
                <div className='bg-blue-600 p-4 rounded-lg mb-3 text-left text-2xl'>
                    <div className={poppins.className}>
                    प्रमुख समाचार
                    </div>
                </div>
            {/* //top stories slider */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><iframe className='rounded-lg' width="1600" height="900" src="https://www.youtube.com/embed/Xukxjs9VYiI?si=lc-5N4ObkBP4tb6C" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            {/* //national link */}
            <Link href='/national'
                className="flex bg-blue-200 p-4 mt-20 mb-3 rounded-lg text-left text-2xl overflow-hidden cursor-pointer">
                <div className={poppins.className}>
                राष्ट्रीय
                </div>
                </Link>
            {/* //national swiper */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    
                    <div className="p-4">
                        <Link className="text-xl font-semibold h-100" href='/national' >MORE</Link>.
                        
                        
                    </div></div></SwiperSlide>
            </Swiper>

             {/* //sports link */}
            <Link href='/sports'
                className="flex bg-orange-200 p-4 mt-20 mb-3 rounded-lg text-left text-2xl font-bold  overflow-hidden cursor-pointer">
                <div className={poppins.className}>
                खेल
                </div>
                </Link>
            {/* //sports swiper */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    
                    <div className="p-4">
                        <Link className="text-xl font-semibold h-100" href='/national' >MORE</Link>.
                        
                        
                    </div></div></SwiperSlide>
            </Swiper>
            
            {/* //business link */}
            <Link href='/business'
                className="flex bg-blue-200 p-4 mt-20 mb-3 rounded-lg text-left text-2xl font-bold  overflow-hidden cursor-pointer">
                <div className={poppins.className}>व्यवसाय</div>
                </Link>
            {/* //business swiper */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    
                    <div className="p-4">
                        <Link className="text-xl font-semibold h-100" href='/national' >MORE</Link>.
                        
                        
                    </div></div></SwiperSlide>
            </Swiper>
        </main>
    )
}
