import React from 'react'
import AboutOwner from './AboutOwner'
import salonPhoto from '../assets/background/salonPhoto.jpeg'
import Map from './Map'
import pinkBg from '../assets/background/pinkBgPhoto.jpeg'


export default function Landing() {
  return (
    <div className='' style={{
        backgroundImage: `url(${pinkBg})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      <div className=' p-8'>
        <AboutOwner />
      </div>
      <div className='grid grid-cols-2 justify-items-center p-8' >
        <Map/>
        <div className=''>
          <img src={salonPhoto} width={500} height={400}/>

        </div>
        
      </div>
     
      
    </div>
  )
}
