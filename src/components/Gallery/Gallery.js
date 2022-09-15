import React,{useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
//Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import {Pagination, Navigation} from "swiper"
import {galleryIndia,gallery,gallerySpain,galleryItaly} from '../../assets/data'
import NorthIndia from '../../assets/gallery/india/7-places-in-North-India-you-must-visit-during-winter.jpg'
import Italy from '../../assets/gallery/italy/7c278a27f058e5114483861a62be22a4.jpg'
import spain from '../../assets/gallery/spain/0b00264378be12d76fbe36d627c14c4a--valencia-spain-beautiful-places.jpg'

// Aos animation 
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.cjs'
import {useInView} from 'react-intersection-observer'

const Gallery = () => {
    const {ref, inView} = useInView()

    useEffect(()=>{
      if(inView){
        Aos.init({
          duration:1200
        })
      }
    },[inView])
  return (
    <div ref={ref} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in" data-aos-delay="150" className='flex flex-col px-8 gap-y-5'>
        <p className='text-center text-gray-600  text-2xl pt-10 pb-10'>Gallery View</p>
       
            <div className='flex flex-row gap-x-4 gap-y-5'>
                <div className='lg:w-1/5 lg:block hidden '><img className='h-full' src={NorthIndia} alt={NorthIndia} /></div>
                <div className='lg:w-4/5 w-full flex flex-row gap-x-3 '>
                    <Swiper
                    // slidesPerView={2}
                        // spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{clickable: true,}}
                        navigation={true}
                        breakpoints={{
                            640: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                            width:640
                            },
                            768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                            width:768
                            },
                            1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                            width:1024
                            },
                            1200: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                            width:1200
                            },
                            
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper swiper-container"
                    >
                        {galleryIndia.map((data)=>
                            <SwiperSlide>
                                <div  key={Math.floor(Math.random() * 100) + 1} class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
                                    <div className='h-48'>
                                        <img class="w-full h-full" src={data.image} alt={data.image}/>
                                    </div>
                                    <div class="px-6 py-4 flex flex-row items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke-width="1.5" 
                                            stroke="currentColor" 
                                            class="w-6 h-6 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <div class="font-bold text-lg">{data.location}</div>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.rating}</span>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className='flex flex-row gap-x-4 gap-y-5'>
                <div className='lg:w-4/5 w-full flex flex-row gap-x-3'>
                    <Swiper
                    // slidesPerView={2}
                        // spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{clickable: true,}}
                        navigation={true}
                        breakpoints={{
                            640: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                            width:640
                            },
                            768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                            width:768
                            },
                            1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                            width:1024
                            },
                            1200: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                            width:1200
                            },
                            
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper swiper-container"
                    >
                        {galleryItaly.map((data)=>
                        <SwiperSlide>
                            <div   key={Math.floor(Math.random() * 100) + 1} class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
                                <div className='h-48'>
                                    <img class="w-full h-full" src={data.image} alt={data.image}/>
                                </div>
                                <div class="px-6 py-4 flex flex-row items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke-width="1.5" 
                                            stroke="currentColor" 
                                            class="w-6 h-6 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <div class="font-bold text-lg">{data.location}</div>
                                    </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.rating}</span>    
                                </div>
                            </div>
                        </SwiperSlide>
                        )}
                    </Swiper>
                </div>

                <div className='lg:w-1/5 lg:block hidden'><img className='h-full' src={Italy} alt={Italy} /></div>
            </div>
            <div className='flex flex-row gap-x-4 gap-y-5' >
                <div className='lg:w-1/5 lg:block hidden'><img className='h-full' src={spain} alt={spain} /></div>

                <div className='lg:w-4/5 w-full flex flex-row gap-x-3'>
                <Swiper
                // slidesPerView={2}
                    // spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{clickable: true,}}
                    navigation={true}
                    breakpoints={{
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        width:640
                        },
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                        width:768
                        },
                        1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        width:1024
                        },
                        1200: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                        width:1200
                        },
                        
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper swiper-container"
                >
                    {gallerySpain.map((data)=>
                    <SwiperSlide>
                        <div  key={Math.floor(Math.random() * 100) + 1} class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
                            <div className='h-48'>
                                <img class="w-full h-full" src={data.image} alt={data.image}/>
                            </div>
                            <div class="px-6 py-4 flex flex-row items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke-width="1.5" 
                                        stroke="currentColor" 
                                        class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <div class="font-bold text-lg">{data.location}</div>
                                </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.rating}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>
                </div>

            </div>
       
    </div>
  )
}

export default Gallery
