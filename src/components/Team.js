import React from 'react'
import smilingFace1 from '../assets/personal/smilingFace1.jpeg'
import smilingFace2 from '../assets/personal/smilingFace2.jpeg'
import smilingFace3 from '../assets/personal/smilingFace3.jpeg'
import { Link } from 'react-router-dom'

export default function Team () {
  return (
    <div className='grid mb-24 '>
        <h1 className='place-self-center mb-12 mt-20 text-pink-500 sm:place-self-center sm:mb-24 sm:mt-20 text-pink-500'>Meet The Team</h1>
        <div className='grid grid-cols-1 justify-items-center sm:grid-cols-3 justify-items-center'>
              <div className='mb-4 grid'>
                <div class="flex flex-wrap justify-center">
                    <div class="w-80 px-4">
                        <img src={smilingFace1}  alt="..." class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                </div>
                <h5 className='place-self-center '>LouAnn - <Link to='/Hair' className='no-underline' ><span className='text-pink-500 hover:text-pink-700 duration-300'>Hair</span></Link></h5>
            </div>
              <div className='grid mb-4'>
                  <div class="flex flex-wrap justify-center">
                    <div class="w-80 px-4">
                        <img src={smilingFace2}  alt="..." class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                </div>
                <h5 className ='place-self-center'>Jennifer -<Link to='/Nails' className='no-underline' ><span className='text-pink-500 hover:text-pink-700 duration-300'> Nails</span></Link></h5>
            </div>
              <div className='grid'>
                <div class="flex flex-wrap justify-center">
                    <div class="w-80 px-4 ">
                        <img src={smilingFace3} alt="..." class="shadow-lg rounded-full max-w-full h-auto  align-middle border-none" />
                    </div>
                </div>
                <h5 className ='place-self-center'>Mary - <Link to='/lashesAndBrows' className='no-underline' ><span className='text-pink-500 hover:text-pink-700 duration-300'>Lashes & Brows</span></Link></h5>
            </div>
        </div>
    </div>
  )
}
