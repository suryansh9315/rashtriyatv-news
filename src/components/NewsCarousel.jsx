import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const NewsCarousel = ({ title, list, link, customStyles }) => {
  return (
    <div className="bg-[#fff] gap-3 flex flex-col px-4 pt-4 pb-4 rounded-md shadow-sm">
      <Link href={link} className={`text-3xl mb-1 font-bold px-4 py-1 rounded-md cursor-pointer ${customStyles}`}>
        {title}
      </Link>
      <hr />
      <div>
        {list.length === 0 && (
          <div className="flex items-center justify-center my-28 text-xl">
            Not enough news articles to show.
          </div>
        )}
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=""
        >
          {list?.map((newsItem) => (
            <SwiperSlide key={newsItem?._id}>
              <div className="flex flex-col gap-2">
                <img
                  src={newsItem?.image_section_1.src}
                  className="w-full object-contain rounded-md"
                />
                <div className="font-medium text-lg">
                  {newsItem?.subHeading}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsCarousel;
