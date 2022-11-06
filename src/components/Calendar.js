import React, { useState } from 'react'
import { PopupModal } from "react-calendly";
import email from '../utils/email';
import Button from 'react-bootstrap/esm/Button';


export default function Calendar(additionalItems) {
  const [isOpen, setIsOpen] = useState(false)
      console.log(additionalItems,'VKUFUYFYUFV')

  const templateParams = {
    name: additionalItems.name,
    phoneNumber: additionalItems.phoneNumber,
    stylist: additionalItems.items.stylist,
    title: additionalItems.items.title,
    total: additionalItems.items.total,
    additionalStyling: additionalItems.items.additionalStyling.map(item =>{return item}),
    additionalDetails: additionalItems.items.additionalDetails
  }
  const runBothFunctions = () => {
    setIsOpen(true) 
    email(templateParams)
  }

    return (
      <div className='bg-gray-500 w-fit'>
        <Button
          onClick={() => runBothFunctions()}>
          Book Now
        </Button>
        <PopupModal url="https://calendly.com/tflake83/appointment"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("root")}
        />
    </div>   
  )
}
