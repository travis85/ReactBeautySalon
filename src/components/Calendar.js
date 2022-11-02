import React, { useState } from 'react'
import { PopupModal } from "react-calendly";
import email from '../utils/email';
import Button from 'react-bootstrap/esm/Button';


export default function Calendar({items}) {
  const [isOpen, setIsOpen] = useState(false)
  const templateParams = {
    message: items.map(item =>{return item.id })
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
