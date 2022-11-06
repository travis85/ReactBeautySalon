import React from 'react'
import aboutOwnerPhoto from '../assets/photos/aboutOwnerBgPhoto.jpeg'
import ownerPhoto  from '../assets/ownerPhoto.jpeg'

export default function AboutOwner() {
    return (
        <div className='grid grid-cols-1 p-4' style={{
            backgroundImage: `url(${aboutOwnerPhoto})`,
            width: '100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>
            <div className='sm:grid grid-cols-2 sm:p-24 '>
                <div className='sm:grid place-items-center'>
                    <div className='sm:mr-8'>
                        <h4 className='justify-self-center'>My name is <span className='text-pink-500'>Michelle</span></h4><br></br>
                        <p className=''>
                            I've been a stylist for 10 years with a passion for making my clients look and feel their best!<br></br>
                            So whatever style you're after book your appointment today and <br></br>
                            come on down to <span className='text-pink-500'>Beauty By Michelle</span>!!
                        </p>
                    </div>
                    
                </div>
                <div className='sm:grid'>
                    <div className='sm:justify-self-center'>
                        <img src={ownerPhoto} width={400} height={400} className='' alt='image'/>
                    </div>
                    
                </div>
            </div>
            
           
            
        </div>
    )
}
