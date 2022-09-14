import React ,{useEffect,ref} from 'react'
import {data} from '../../assets/data.js'
import '../../assets/tourpackage.css'
import {motion} from 'framer-motion'
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.cjs'
import {useInView} from 'react-intersection-observer'
const BestTourPkg = () => {
  const {ref, inView} = useInView()
  useEffect(()=>{
    if(inView){
      Aos.init({
        duration:1200
      })
    }
  },[inView])

  
  return (
    <div className='pt-32'>
      <p className='text-center text-2xl pb-10'>Best Tour Packages, you love</p>
      <div ref={ref} className='grid grid-cols-4 gap-4 px-10 tour-package'>
        {
            data.map((item)=>
                <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-delay="150" key={item.id} class="max-w-sm rounded overflow-hidden shadow-lg">
                <motion.div className='w-full'
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 1.0 },
                   }}
                  whileTap={{ scale: 0.9  }}
                  
                >
                  <img class="w-full" src={item.image} alt={item.image}/>
                </motion.div>
                <div class="px-3 pt-6 flex flex-row justify-between tour-price-day">
                    <p class="font-bold text-md">{item.price}</p>
                    <p class="text-gray-700 text-md">
                    {item.day}
                    </p>
                </div>
                <div class="px-3  pb-2 pt-1 tour-place flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke-width="1.5" 
                     stroke="currentColor" 
                     class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span 
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 
                            font-semibold text-gray-700 mr-2 mb-1">
                            {item.place}
                    </span>
                </div>
                <div class="px-3  pb-4 tour-rating flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-6 h-6 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    {item.rating}
                </div>
    
              </div>
            )
        }
      </div>
    </div>
  )
}

export default BestTourPkg
