import React from 'react'
import icon from '../../assets/logo/travel-icon-removebg-preview.png'
import facebook from '../../assets/logo/facebook-removebg-preview.png'
import instgram from '../../assets/logo/instgram-removebg-preview.png'
import linkedIn from '../../assets/logo/linkedin-removebg-preview.png'
import twitter from '../../assets/logo/twitter-removebg-preview.png'
import location from '../../assets/logo/location-icon.png'
import contact from '../../assets/logo/contact-icon.png'
import letter from '../../assets/logo/letter-icon.png'
import express from '../../assets/logo/expresscard-removebg-preview.png'
import mastercard from '../../assets/logo/mastercard-removebg-preview.png'
import visacard from '../../assets/logo/visa-removebg-preview.png'
import paypal from '../../assets/logo/paypal-removebg-preview.png'
import NewsLetter from '../NewsLetter/NewsLetter'
const Footer = () => {
  return (
    <div className='relative pt-36 divide-y grid grid-cols-1'>
      <div className=' flex flex-col lg:flex-row sm:flex-col md:flex-col px-2 sm:px-10 md:px-10 gap-x-5 pt-32 text-white ' style={{backgroundColor:'#262339'}}>
        <div className='m-auto w-full lg:w-1/3'>
          <div className='pb-16  m-auto'>
            <div className='mb-5'><img className='w-16 h-16' src={icon} alt={icon}/></div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>
            <div>
                <p className='pt-5 pb-4'>Follow Us</p>
                <div className='flex flex-row gap-x-4'>
                    <img className='w-10 h-10' src={facebook} alt={facebook} />
                    <img className='w-10 h-10' src={instgram} alt={instgram} />
                    <img className='w-10 h-10' src={linkedIn} alt={linkedIn} />
                    <img className='w-10 h-10' src={twitter} alt={twitter} />
                    
                </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-x-5 m-auto w-full lg:w-2/3'>
          <div className='flex flex-col w-2/6 '>
            <p className=' mt-1 pb-6 m-auto'>Contact Us</p>
            <div className='flex flex-row items-center pb-3 '>
                <img className='w-6 h-6 mr-4 hidden md:block lg:block' src={contact} alt={contact} />
                <div className='flex flex-col'>
                    <p>+01852-1265122</p>
                    <p>+01852-1265122</p>
                </div>
            </div>
            <div className='flex flex-row items-center pb-3'>
                <img className='w-6 h-6 mr-4 hidden md:block lg:block' src={letter} alt={letter} />
                <div className='flex flex-col'>
                    <p>info@example.com</p>
                    <p>support@gmail.com</p>
                </div>
            </div>
            <div className='flex flex-row items-center pb-3'>
                <img className='w-6 h-6 mr-4 hidden md:block lg:block' src={location} alt={location} />
                <div className='flex flex-col'>
                    <p>2752 Willison Street</p>
                    <p>Eagan, United State</p>
                </div>
            </div>
          </div>
          <div className='flex flex-col w-2/6 '>
            <p className='mt-1 pb-6 m-auto'>Support </p>
            <p className='pb-3 m-auto' >Contact us</p>
            <p  className='pb-3 m-auto'>About us</p>
            <p  className='pb-3 m-auto'>Destinations</p>
            <p  className='pb-3 m-auto'>Our Blogs</p>
            <p  className='pb-3 m-auto'>Package</p>
          </div>
          <div className='flex flex-col w-2/6'>
            <p className='mt-1 pb-6 m-auto'>We Accepts</p>
            <div className='flex flex-col m-auto'>
                <div className='flex flex-row'>
                    <img className='w-16 h-16'  src={mastercard} alt={mastercard} />
                    <img className='w-16 h-16' src={visacard} alt={visacard} />
                  
                </div>
                <div className='flex flex-row'>
                    <img className='w-16 h-16' src={express} alt={express} />
                    <img className='w-16 h-16' src={paypal} alt={paypal} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-rose-200' style={{backgroundColor:'#262339'}}>
        <p className='text-white text-center py-2'>Copyrigth 2022 @Travel endless </p>
      </div>
      
      <NewsLetter />
    </div>
  )
}

export default Footer
