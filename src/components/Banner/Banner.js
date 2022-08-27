import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import '../../assets/banner.css'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import travel01 from '../../assets/images/travel-banner-01.jpg'
import travel02 from '../../assets/images/travel-banner-02.jpg'
import travel04 from '../../assets/images/travel-banner-04.jpg'
import travel05 from '../../assets/images/travel-banner-05.jpg'
import travel06 from '../../assets/images/travel-banner-06.jpg'
import travel08 from '../../assets/images/travel-banner-08.jpg'
import Search from '../Search';
import DateComponent from '../Date/DateComponent';

const Banner = () => {

  return (
    <div className='relative'>
      <Swiper 
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide><img className='w-full ' src= {travel02}  alt={travel02}/></SwiperSlide>
        <SwiperSlide><img className='w-full ' src= {travel04}  alt={travel04}/></SwiperSlide>
        <SwiperSlide><img className='w-full ' src= {travel05}  alt={travel05}/></SwiperSlide>
        <SwiperSlide><img className='w-full ' src= {travel06}  alt={travel06}/></SwiperSlide>
        <SwiperSlide><img className='w-full ' src= {travel08}  alt={travel08}/></SwiperSlide>
        
      </Swiper>
      <Search />
      
    </div>
  )
}

export default Banner
