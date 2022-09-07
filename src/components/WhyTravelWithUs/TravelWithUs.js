import React from 'react'
import '../../assets/whytravel.css'
import {travel} from '../../assets/data.js'
const TravelWithUs = () => {
   travel.map(t=>console.log(t.image))
  return (
    <div className='pt-24 pb-16'>
        <p className='pb-16 text-center text-2xl'>Why you make tour with us</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around why-tour'>
            {
                travel.map((tr)=>
                <div key={tr.id} className='bg-emerald-800 rounded-md h-full'>
                    <div className=''><img  src={tr.image} alt='image not found' /></div>
                    <div  className=''><p className='text-white text-xl' > {tr.title}</p> </div>              
                </div>
                )
            }
            
        </div>
    </div>
  )
}

export default TravelWithUs
