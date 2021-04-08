import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselItem } from './CarouselItem';

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <>
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
      >
        <SwiperSlide key="1">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide key="2">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide key="3">
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}