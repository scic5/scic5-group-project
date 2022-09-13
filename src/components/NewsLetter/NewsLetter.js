import React from 'react'
import '../../assets/newsLetter.css'
const NewsLetter = () => {
  return (
    <div className='bg-pink-300 w-2/3 m-auto h-56 rounded-md absolute inset-x-0 top-10'>
        <p className='text-center py-8 text-2xl text-white'>Subscribe To Our Newsletter For Latest Update</p>
        <div className='m-auto flex flex-row py-3 pl-2 searchbox' style={{width:'50%',backgroundColor:''}}>
            <div className='flex items-center' style={{width:'60%'}}><input className='border-0 w-full bg-gray-300 rounded-l-lg pl-2 py-1' type='text' placeholder='Enter email' /></div>
            <div className='flex items-center' style={{width:'40%',border:'0px solid blue'}}><button type='submit' className='text-sm w-full bg-rose-400 py-4 rounded-r-lg'>Subscribe</button></div>
        </div>
    </div>
  )
}

export default NewsLetter
