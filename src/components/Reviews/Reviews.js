import React,{useRef} from 'react'
import '../../assets/reviews.css'
import {reviews} from '../../assets/data'
import {motion} from 'framer-motion'
const Reviews = () => {
  const scrollRef = useRef(null)
  return (
    <div className='pt-10 pb-16' style={{background:'#F9EAEA'}}>
        <p  className='pb-16 text-center text-2xl'>Reviews which we deserve</p>
        <motion.div 
        className= ' flex flex-col md:flex-row md:flex-row review gap-x-4 gap-y-4 drop-shadow-xl'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
        >
           {reviews.map((review)=>
             <div key={review.id} class="max-w-sm rounded  shadow-lg rounded-t-full drop-shadow-xl " style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <img class=" rounded-full" src={review.image} alt={review.image}/>
              <div class="px-6 py-4">
                  <div class="font-bold text-md mb-2 text-center">{review.name}</div>
                  <div className='text-md mb-2 text-center'>{`'${review.status}'`}</div>
                  <p class="text-gray-700 text-base text-ellipsis">
                  {`"${review.comment.length > 230 ? review.comment.slice(0, 230) : review.comment}"`}
                  {review.comment.length > 230 ?<button className='text-sm text-orange-500'>see more</button> :''}
                  </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{review.review}</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{review.recommend}</span>
              </div>
            </div>
           )}
        </motion.div>
        
    </div>
  )
}

export default Reviews
