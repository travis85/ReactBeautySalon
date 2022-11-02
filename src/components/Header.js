import React from 'react'
import logo from '../assets/photos/logo.jpeg'
import headerBg from '../assets/background/headerBackgroundPhoto.jpeg'
import {Link} from "react-router-dom";
import { GrHomeRounded } from 'react-icons/gr';


export default function Header() {
  
  return (
      <div className='h-32  grid grid-cols-3 p-4 bg-opacity-80'
      style={{
        backgroundImage: `url(${headerBg})`,
        
      }}
      >
      
      <div className='text-white grid justify-self-start'>
        <Link to={'/'}><GrHomeRounded className='absolute text-xl text-white top-4 left-2 cursor-pointer fill-green-600' /></Link>
        <div className='grid content-center' >
          <p>Beauty Salon By: <span className='text-pink-500 '>Random Person </span><br></br>
          (734) 123-4567
        </p>
        </div>
        
      </div>

      <div className='grid justify-items-start col-span-2' >
        <div className='grid justify-items-center'>
          <h1 className=''>Book Your Appointment Today!</h1>
          <div className='flex justify-center justify-items-center'>
            <Link to='/Hair' className='no-underline' ><h3 className='mr-5 cursor-pointer transition ease-in-out delay-150 text-pink-500 hover:-translate-y-1 hover:scale-110 hover:text-pink-600 duration-300 '>Hair</h3></Link>
            <Link to='/nails' className='no-underline'><h3 className='mr-5 cursor-pointer transition ease-in-out delay-150 text-pink-500 hover:-translate-y-1 hover:scale-110 hover:text-pink-600 duration-300'>Nails</h3></Link>
            <Link to='/lashesAndBrows' className='no-underline'><h3 className='cursor-pointer transition ease-in-out delay-150 text-pink-500 hover:-translate-y-1 hover:scale-110 hover:text-pink-600 duration-300'>Lashes & Brows</h3></Link>
          </div>
        </div>        
      </div>

      <div className='absolute top-4 right-2 '>
        <img  src={logo} width={75} height={75} alt='img'/>
      </div>
      
    </div>
  )
}

