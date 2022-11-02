import React from 'react'
import aboutOwnerPhoto from '../assets/photos/aboutOwnerBgPhoto.jpeg'
import ownerPhoto  from '../assets/ownerPhoto.jpeg'

export default function AboutOwner() {
    return (
        <div className='grid grid-cols-2 p-24' style={{
            backgroundImage: `url(${aboutOwnerPhoto})`,
            width: '100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>
            <div className='grid justify-center'>
                <div>
                    <h4>My name is Michelle</h4><br></br>
                <p className=''>
                    Ive been a stylist for 10 years with a passion for making my clients look and feel their best!<br></br>
                    So whatever style your after book your appointment today and <br></br>
                    come on down to <span className='text-pink-500'>Beauty By Michelle</span>!!
                </p>
                </div>
                
            </div>
            <div className='grid justify-center pr-2 '>
                <div className=''>
                    <img src={ownerPhoto} width={400} height={400} className='' alt='image'/>
                </div>
                
            </div>
            
        </div>
    )
}
