"use client"
// components/BlogPage.js
import React from 'react';
import Swiper from 'swiper/bundle';

const SliderComponent = () => {
  // Initialize Swiper when the component mounts
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true, // Enable loop mode if you want continuous scrolling
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

const BlogPage = () => {
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
      
    </div>
  );
};

export default BlogPage;
