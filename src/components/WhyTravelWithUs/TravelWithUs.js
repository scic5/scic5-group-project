import React ,{ref,useEffect} from 'react'
import '../../assets/whytravel.css'
import {travel} from '../../assets/data.js'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
// import useAnimation from 'react-use-animation';
import {useAnimation} from 'framer-motion'
const TravelWithUs = () => {
   const {ref, inView} = useInView()
   const animation = useAnimation()
   useEffect(()=>{
    if(inView){
      animation.start({
        x: 0,
        transition:{
          type:'spring',duration:1,bounce:0.3, stiffness:120,delay:0.5
        }
      })
    }
    if(!inView){
        animation.start({x:'-100vw'})
    }
   },[inView])
  return (
    <div 
      ref={ref}
      className='pt-24 pb-16'
      // initial={{x:'-100vw'}}
      // animate={{x:0}}
     
      // transition={{type:'spring',duration:1,bounce:0.3, stiffness:120,delay:0.5}}
    >
        <p className='pb-16 text-center text-2xl'>Why you make tour with us</p>
        <motion.div
         animate={animation}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around why-tour'>
            {
                travel.map((tr)=>
                <div key={tr.id} className='bg-emerald-800 rounded-md h-full'>
                    <div className=''><img  src={tr.image} alt='image not found' /></div>
                    <div  className=''><p className='text-white text-xl' > {tr.title}</p> </div>              
                </div>
                )
            }
            
        </motion.div>
    </div>
  )
}

export default TravelWithUs
