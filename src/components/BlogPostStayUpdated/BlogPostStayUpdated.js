import React,{useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import '../../assets/blogpost.css'
import {blogPostStayUpdate} from '../../assets/data'

//Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import {Pagination, Navigation} from "swiper"

// Aos animation 
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.cjs'
import {useInView} from 'react-intersection-observer'


const BlogPostStayUpdated = () => {
  const {ref, inView} = useInView()

  useEffect(()=>{
    if(inView){
      Aos.init({
        duration:1200
      })
    }
  },[inView])
  return (
    <div ref={ref}>
      <p className='text-center text-lg text-rose-300'>Latest Blog</p>
      <p className='text-center text-3xl text-gray-500 pb-16'>Stay Updated and See Blog</p>
      <div className='px-5 flex flex-col md:flex-col lg:flex-row place-items-center justify-center gap-x-4 gap-y-4'>
        <Swiper
            // slidesPerView={2}
            // spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{clickable: true,}}
            navigation={true}
            breakpoints={{
                // 640: {
                //   slidesPerView: 1,
                //   spaceBetween: 20,
                //   width:640
                // },
                // 768: {
                //   slidesPerView: 2,
                //   spaceBetween: 40,
                //   width:768
                // },
                // 1024: {
                //   slidesPerView: 3,
                //   spaceBetween: 50,
                //   width:1024
                // },
                // 1200: {
                //   slidesPerView: 4,
                //   spaceBetween: 50,
                //   width:1200
                // },
                500:{slidesPerView:1,spaceBetween:30,width:500},
                576:{slidesPerView:1,spaceBetween:30,width:576},
                768:{slidesPerView:1,spaceBetween:30,width:768},
                992:{slidesPerView:2,spaceBetween:20,width:992},
                1024:{slidesPerView:3,spaceBetween:20,width:1024},
                1200:{slidesPerView:4,spaceBetween:20,width:1200},
                1400:{slidesPerView:4,spaceBetween:20,width:1400}
                
              }}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-container"
        >
            {blogPostStayUpdate.map((blogPost)=>
            <SwiperSlide>
              <div 
                   data-aos="flip-left" 
                   data-aos-offset="200" 
                   data-aos-easing="ease-in" 
                   data-aos-delay="150" 
                   class="flex flex-col m-auto maxWidthSm rounded overflow-hidden shadow-lg m-auto mb-10">
                  <div className='card-zoom'>
                    <img className="card-zoom-image w-full" src={blogPost.image} alt={blogPost.image}/>
                  </div>
                  <div class="py-3 flex flex-row justify-between px-1">
                    <div class="font-bold text-gray-400 text-md mb-2">{blogPost.person}</div>
                    <div class="font-bold text-md mb-2">{`(${blogPost.comment.length})Comment`}</div>
                  </div>
                  <div class="px-2 pt-1 pb-2">
                    <p className='text-lg text-gray-400'>{blogPost.title}</p>
                  </div>
                  <div className=''>
                    <button className='btn button m-3 rounded-md  text' style={{border:'1px solid blanchedalmond'}}>Read more</button>
                  </div>
              </div>
            </SwiperSlide>
            )}
        </Swiper>
      </div>
    </div>
  )
}

export default BlogPostStayUpdated
