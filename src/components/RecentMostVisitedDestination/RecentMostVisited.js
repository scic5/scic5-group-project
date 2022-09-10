import React from 'react'
import image1 from '../../assets/mostvisitedPlace/istockphoto-1355996462-170667a.jpg'
import image2 from '../../assets/mostvisitedPlace/kerala-tour.jpg'
const RecentMostVisited = () => {
  return (
   <div className='mb-16'>
     <div className='w-full' style={{
        backgroundImage:"url(./blogpostupdate/ezgif.com-gif-maker.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'80vh' ,
       
    }}>
        <p className='text-lg text-rose-300 text-center pt-9 pb-1'>Feature tours</p>
      <p className='text-2xl text-white font-bold text-center pb-10'>Our most visited places</p>

       <div className='flex flex-col md:flex-row lg:flex-row gap-x-5 gap-y-5 px-20 justify-between'>
            <div className="h-32 lg:h-48  cursor-auto flex flex-row items-center bg-white rounded-lg border shadow-md  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className='w-1/3 h-full'><img style={{height:'100%'}} className="w-full rounded-l-lg" src={image1} alt={image1}/></div>
                <div class=" flex flex-col justify-between p-4 leading-normal w-2/3 ">
                     <p className='text-2xl text-gray-500'>Group tour, hill site local area</p>
                     <p className='text-red-500'>6K + rating</p>
                    <div className='flex flex-row'>
                    <p className='font-bold mr-2'>$200 </p>
                    <p style={{textDecoration: 'line-through'}}>$300</p>
                    </div>
                </div>
            </div>
            <div className="h-32 lg:h-48  cursor-auto flex flex-row items-center bg-white rounded-lg border shadow-md  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
               <div className='w-1/3 h-full'> <img style={{height:'100%'}} className="w-full rounded-l-lg" src={image2} alt={image2}/></div>
                <div class="flex flex-col justify-between p-4 leading-normal w-2/3">
                    <p className='text-2xl text-gray-500'>Group tour, native local area</p>
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
