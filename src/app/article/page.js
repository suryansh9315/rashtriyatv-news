"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const artice = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">My Blog Post</h1>
    <p className="text-gray-700">Here's my blog content...</p>

    {/* Add an image */}
    <img src="/your-image.jpg" alt="Blog Image" className="my-4" />

    {/* Add a YouTube video */}
    <div className="relative" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube Video"
        allowFullScreen
      />
    </div>

    {/* Social Media Links */}
    <div className="mt-4">
      <a
        href="https://www.facebook.com"
        className="mr-4 text-blue-600 hover:underline"
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com"
        className="text-pink-600 hover:underline"
      >
        Instagram
      </a>
    </div>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,
        Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div class="bg-white flex flex-col sm:flex-row shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth">
     
    <img src="https://via.placeholder.com/250x150" alt="News Image" class="object-cover w-full sm:w-1/2" />

     
    <div className="p-4 flex flex-col justify-between">
        <div>
            <h2 className="text-xl font-semibold">Breaking News</h2>
            <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

         
        <a href="/article" className="text-blue-500 hover:underline mt-4 self-end">Read more</a>
    </div>
</div></SwiperSlide>
        <SwiperSlide><div className="bg-white flex shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/250x150" alt="News Image" className=" object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div></div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  </div>
  )
}

export default artice