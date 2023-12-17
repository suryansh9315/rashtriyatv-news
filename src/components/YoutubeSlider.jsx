import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const YoutubeSlider = ({ list }) => {
  return (
    <div className=" w-[450px] h-[253px] sm:w-[600px] sm:h-[338px] md:w-[800px] md:h-[450px]">
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
          <SwiperSlide key={video?.src}>
            <iframe
              className="rounded-lg "
              width="800"
              height="450"
              src={video?.src}
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
