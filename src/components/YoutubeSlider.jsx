import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const YoutubeSlider = ({ list }) => {
  return (
    <div className="w-[90vw] sm:w-[600px] md:w-[800px] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        delay={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {list?.map((video) => (
          <SwiperSlide key={video?.yt}>
            <iframe
              className="rounded-lg w-full h-[60vw] sm:h-[320px] md:h-[450px]"
              // height="450"
              src={video?.yt}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YoutubeSlider;
