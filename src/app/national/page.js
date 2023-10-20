"use client"

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';
import { Pagination } from 'swiper/modules';
const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  weight: '700',
});
const national = () => {
  return (
    <div> <section className="container mx-auto w-full mt-8 px-4">
    <div className="bg-blue-600 p-4 rounded-lg mb-3 text-left text-2xl">
    <div className={poppins.className}>राष्ट्रीय समाचार</div>
  </div>
  <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        delay={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <iframe
            className="rounded-lg md:shrink-0"
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/Xukxjs9VYiI?si=lc-5N4ObkBP4tb6C"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            className="rounded-lg md:shrink-0"
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/Xukxjs9VYiI?si=lc-5N4ObkBP4tb6C"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        {/* Add more slides here */}
      </Swiper>
<div className="container px-5 py-8 md:py-16 mx-auto">
  <div className="flex flex-wrap -m-2 md:-m-4">
    {/* Individual blog items */}
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4 ">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>
    <Link href="/" className="p-2 md:w-1/2 lg:w-1/4 md:p-4">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
          className="h-64 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-4">
          
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            TITLE
          </h1>
          <div className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </div>
          
        </div>
      </div>
    </Link>

    {/* Add two more similar blog items here */}
    {/* You can duplicate the code for each blog item and replace the content and image URLs */}
  </div>
</div>
</section></div>
  )
}

export default national