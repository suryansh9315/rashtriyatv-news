"use client"
import Link from 'next/link';
import React from 'react';
import { Poppins } from 'next/font/google';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  weight: '700',
});

export default function Home() {
  return (
    <main className="container mx-auto w-full mt-8 px-4">
      <div className="bg-blue-600 p-4 rounded-lg mb-3 text-left text-2xl">
        <div className={poppins.className}>प्रमुख समाचार</div>
      </div>
      {/* Top Stories Slider */}
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
            className="rounded-lg "
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
      {/* National Link */}
      <Link href="/national" className="flex bg-blue-200 p-4 mt-8 mb-3 rounded-lg text-left text-2xl cursor-pointer">
        <div className={poppins.className}>राष्ट्रीय</div>
      </Link>
      {/* National Swiper */}
      
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Your national content */}
          
        </SwiperSlide>
        {/* Add more national content slides here */}
      </Swiper>
      {/* Sports Link */}
      <Link href="/sports" className="flex bg-orange-200 p-4 mt-8 mb-3 rounded-lg text-left text-2xl font-bold cursor-pointer">
        <div className={poppins.className}>खेल</div>
      </Link>
      {/* Sports Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Your sports content */}
        </SwiperSlide>
        {/* Add more sports content slides here */}
      </Swiper>
      {/* Business Link */}
      <Link href="/business" className="flex bg-blue-200 p-4 mt-8 mb-3 rounded-lg text-left text-2xl font-bold cursor-pointer">
        <div className={poppins.className}>व्यवसाय</div>
      </Link>
      {/* Business Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Your business content */}
        </SwiperSlide>
        {/* Add more business content slides here */}
      </Swiper>
    </main>
  );
}
