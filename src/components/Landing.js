import React from 'react'
import AboutOwner from './AboutOwner'
import salonPhoto from '../assets/background/salonPhoto.jpeg'
import Map from './Map'
import pinkBg from '../assets/background/pinkBgPhoto.jpeg'
import Team from './Team'

export default function Landing() {
  return (
    <div className=' sm:pb-24' style={{
        backgroundImage: `url(${pinkBg})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      <div className=' p-8'>
        <AboutOwner />
      </div>
      <Team />
      <div className='grid '>
        <h1 className='text-pink-500 mb-12 place-self-center sm:mb-24'>Located In Metro Detroit</h1>
        <div className='grid grid-cols-1 p-8  sm:grid-cols-2 justify-items-center sm:p-0 ' >
          <div className='mb-4 sm:mb-0'>
            <img src={salonPhoto} width={500} height={400}/>
          </div>

          <div>
             <Map/>
          </div>
         
        </div>
      </div>
    </div>
  )
}
