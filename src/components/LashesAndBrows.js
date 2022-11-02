import React from 'react'
import ProductCard from './ProductCard'
import pinkBg from '../assets/background/pinkBgPhoto.jpeg'
import eyeBrowMicroBlading from '../assets/lashesAndBrows/eyeBrowMicroBlading.jpeg'
import eyeBrowThreadingPhoto from '../assets/lashesAndBrows/eyeBrowThreadingPhoto.jpeg'
import eyebrowWax from '../assets/lashesAndBrows/eyebrowWax.jpeg'
import eyeLashInstallPhoto from '../assets/lashesAndBrows/eyeLashInstallPhoto.jpeg'

     const cardInfoLashesAndBrows = [
    {
        id: '1',
        photo: eyeLashInstallPhoto,
        title: 'Eye Lash Install' ,
        description: null,
        price: '40'
    },
    {
        id: '2',
        photo: eyeBrowMicroBlading,
        title: 'Eye Brow Micro Blading' ,
        description: null,
        price: '40'
    },
    {
        id: '3',
        photo: eyeBrowThreadingPhoto,
        title: 'Eye Brow Threading' ,
        description: null,
        price: '40'
    },
    {
        id: '3',
        photo: eyebrowWax,
        title: 'Eye Brow Wax' ,
        description: null,
        price: '40'
    },
    
]


function lashesAndBrows() {

  return (
      <div className='p-10' style={{
            backgroundImage: `url(${pinkBg})`,
            width: '100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
          <ProductCard cardData={cardInfoLashesAndBrows}/>
    </div>
  )
}
export default lashesAndBrows