import React,{useEffect} from 'react'
import image1 from '../../assets/mostvisitedPlace/5523efffeab8eab22efc8280.png'
import image2 from '../../assets/mostvisitedPlace/istock000061987592large.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.cjs'
import {useInView} from 'react-intersection-observer'
const RecentMostVisited = () => {
    const {ref, inView} = useInView()
    useEffect(()=>{
        if(inView){
          Aos.init({
            duration:1200
          })
        }
      },[inView])
  return (
   <div ref={ref} className='mb-16' style={{height:'80vh'}}>
     <div className='w-full' style={{
        backgroundImage:"url(./blogpostupdate/ezgif.com-gif-maker.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'80vh' ,
       
    }}>
        <p className='text-lg text-rose-300 text-center pt-9 pb-1'>Feature tours</p>
        <p className=' text-white font-bold text-center pb-10' style={{fontSize:'2vw'}}>Our most visited places</p>

        <div className='h-2/6 flex flex-col md:flex-row lg:flex-row gap-x-5 gap-y-5 px-10 lg:px-15 justify-between'>
              <div 
                    data-aos="fade-right" 
                    data-aos-offset="200" 
                    data-aos-easing="ease-in" 
                    data-aos-delay="150" 
                    className="h-full cursor-auto flex flex-row items-center bg-white rounded-lg border shadow-md  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className='w-1/3 h-full'>
                    <img className="w-full h-full rounded-l-lg" src={image1} alt={image1}/>
                  </div>
                  <div class=" flex flex-col justify-between p-4 leading-normal w-2/3 ">
                      <p className='text-lg lg:text-2xl text-gray-500'>Group tour, hill site local area</p>
                      <p  className='text-red-500'>6K + rating</p>
                      <div className='flex flex-row'>
                      <p className='font-bold mr-2'>$200 </p>
                      <p style={{textDecoration: 'line-through'}}>$300</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in" data-aos-delay="150" className="h-full cursor-auto flex flex-row items-center bg-white rounded-lg border shadow-md  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className='w-1/3 h-full'> <img className="w-full h-full rounded-l-lg" src={image2} alt={image2}/></div>
                  <div class="flex flex-col justify-between p-4 leading-normal w-2/3">
                      <p className='text-lg lg:text-2xl text-gray-500'>Group tour, native local area</p>
                      <p className='text-red-500'>7K + rating</p>
                      <div className='flex flex-row'>
                          <p className='font-bold mr-2'>$150 </p>
                          <p style={{textDecoration: 'line-through'}}>$200</p>
                      </div>
                  </div>
              </div>
        </div>
    </div>
   </div>
  )
}

export default RecentMostVisited
