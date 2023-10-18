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
          <h2 className="flex bg-blue-200 p-4 mt-5 mb-3 rounded-lg text-left text-2xl overflow-hidden cursor-pointer">NEWS TITLE</h2>
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              width="1000"
              height="562"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube Video"
              allowFullScreen
            />
          </div>
          <div className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla sapiente fugiat repellat quo. Et accusamus, quam nemo nisi nam accusantium ad aut beatae laboriosam inventore reiciendis ducimus iusto eius.</div>

        </section>
        <section className="container mx-auto py-8">
          <h2 className="text-2xl mb-4">Related News</h2>
          {/* ... Related News Cards ... */}
        </section>
    
      </main >
      
  );
};

export default news;
