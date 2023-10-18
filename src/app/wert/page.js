// pages/news.js
import React from 'react';

const news = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 realtive text-white text-center py-4">
        <h1 className="text-3xl">News Blog</h1>
      </header>
      <main className="container mx-auto py-8">
        <section className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl">Featured News</h2>
          <div className="relative" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AxLZXkGqyBE?si=FGQ4aAW3BW8dLHcT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <a href="full-news.html" className="text-blue-600 hover:underline">Read More</a>
        </section>
      </main>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl mb-4">Related News</h2>
        {/* ... Related News Cards ... */}
      </section>
    </div>
  );
};

export default news;
