import React from 'react'
import eiffel from '../../assets/blogpostupdate/eiffel-tower-g6eb68898a_640.jpg'
import indiaPlace from '../../assets/blogpostupdate/india-places-to-visit.jpg'
import wp from '../../assets/blogpostupdate/wp8738941.jpg'
import '../../assets/blogpost.css'
const BlogPostStayUpdated = () => {
  return (
    <div>
      <p className='text-center text-lg text-rose-300'>Latest Blog</p>
      <p className='text-center text-3xl text-gray-500 pb-5'>Stay Updated and See Blog</p>
      <div className='px-5 flex flex-col md:flex-col lg:flex-row place-items-center justify-center gap-x-4 gap-y-4'>
        <div class="max-w-sm rounded overflow-hidden shadow-lg card-zoom">
            <img className="card-zoom-image w-full" src={eiffel} alt={eiffel}/>
            <div class="px-6 py-4 flex flex-row justify-between px-3">
                <div class="font-bold text-xl mb-2">Person</div>
                <div class="font-bold text-xl mb-2">Comment</div>
                
            </div>
            <div class="px-6 pt-4 pb-2">
             <p className='text-2xl text-gray-400'>Donec Egestas Orci Viverra Fermentum Risus.</p>
            </div>
            <div>
                <button className='m-6 rounded-md p-1' style={{border:'1px solid red'}}>Read more</button>
            </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg card-zoom">
            <img class="w-full card-zoom-image" src={indiaPlace} alt={indiaPlace}/>
            <div class="px-6 py-4 flex flex-row justify-between px-3">
                <div class="font-bold text-xl mb-2">Person</div>
                <div class="font-bold text-xl mb-2">Comment</div>
                
            </div>
            <div class="px-6 pt-4 pb-2">
             <p className='text-2xl text-gray-400'>Donec Egestas Orci Viverra Fermentum Risus.</p>
            </div>
            <div>
                <button className='m-6 rounded-md p-1' style={{border:'1px solid red'}}>Read more</button>
            </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg card-zoom">
            <img class="w-full card-zoom-image" src={wp} alt={wp}/>
            <div class="px-6 py-4 flex flex-row justify-between px-3">
                <div class="font-bold text-xl mb-2">Person</div>
                <div class="font-bold text-xl mb-2">Comment</div>
                
            </div>
            <div class="px-6 pt-4 pb-2">
             <p className='text-2xl text-gray-400'>Donec Egestas Orci Viverra Fermentum Risus.</p>
            </div>
            <div>
                <button className='m-6 rounded-md p-1' style={{border:'1px solid red'}}>Read more</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostStayUpdated
