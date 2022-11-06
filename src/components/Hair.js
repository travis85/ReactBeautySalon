import React from 'react'
import ProductCard from '../components/ProductCard'
import cornRolls from '../assets/hair/cornrolls.jpeg'
import designer from '../assets/hair/designerBraids.jpeg'
import butterfly from '../assets/hair/butterflyBraid.jpeg'
import zillion from '../assets/hair/zillionBraids.jpeg'
import twist from '../assets/hair/twistBraids.jpeg'
import boxBraids from '../assets/hair/boxBraids.jpeg'
import pinkBg from '../assets/background/pinkBgPhoto.jpeg'

const cardInfoHair = [
    {
        id: '1',
        photo: cornRolls,
        title: 'Cornroll Braids' ,
        description: null,
        price: '40'
    },
    {
        id: '2',
        photo: designer,
        title: 'Designer Braids' ,
        description: null,
        price: '80'
    },
    {
        id: '3',
        photo: boxBraids,
        title: 'Box Braids' ,
        description: null,
        price: '40'
    },
    {
        id: '4',
        photo: butterfly,
        title: 'Butterfly Braids' ,
        description: null,
        price: '80'
    },
    {
        id: '5',
        photo: twist,
        title: 'Twist Braids' ,
        description: null,
        price: '40'
    },
    {
        id: '6',
        photo: zillion,
        title: 'Zillion Braids' ,
        description: null,
        price: '40'
    }
]



export default function Hair() {
  return (
    <div className='grid place-items-center sm:p-10' style={{
        backgroundImage: `url(${pinkBg})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
          <div className=''>
               <ProductCard cardData = {cardInfoHair} />
          </div>
       
    </div>
  )
}
