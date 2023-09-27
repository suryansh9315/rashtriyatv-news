import React from 'react'

const sports = () => {
  return (
    <div className="w-full">
    <div id='slider' className="flex overflow-x-scroll space-x-4 p-4 ">
                
                <div  className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 scroll-smooth" >
                    <img src="https://via.placeholder.com/400x250" alt="News Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Breaking News</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="/article" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                    </div>
                </div>
                </div>
                


  )
}

export default sports