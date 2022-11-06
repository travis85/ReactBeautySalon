import React, { useEffect, useState } from 'react' 
import { useLocation } from 'react-router-dom';
import { currencyFormatter } from '../utils/currencyFormatter'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import pinkBg from '../assets/background/pinkBgPhoto.jpeg'
import CustomerForm from './CustomerForm';

const additionalStylingHair = {
'Wash and Blow dry:': '40',
'Highlights:': '60', 
'Cut Split Ends:': '50',
'Hot Oil Treatment:': '100'
}
const additionalStylingNails = {
'Basic polish:': '40',
'Shellac:': '60', 
'Gel:': '50',
'Acrylic:': '100',
'Dip Powder:': '100',
'Manicure': '80'
}
const additionalStylingLashes = {
'Strip Lashes': '40',
'Individual Single Lashes': '80',
'Individual Flare Lashes' : '80',
}

export default function Booking() {
  const location = useLocation();
  const price = location.state.card.price
  const title = location.state.card.title
  const photo = location.state.card.photo
  const [stylist, setStylist] = useState('Random')
  const [total, setTotal] = useState(price)

  let [additionalItems, setAdditionalItems] = useState([{
    title: title,
    total: Number(total) ,
    stylist: stylist,
    additionalStyling: [],
    additionalDetails: ''
  }])

  let additionalStyling 
  if (title.match('Nails')) {
    additionalStyling = additionalStylingNails
  } else if (title.match('Eye')) {
    additionalStyling = additionalStylingLashes
  } else {
    additionalStyling = additionalStylingHair
  }

  const add = ( price) => {
    setTotal(price + Number(total))
 }
  const subtract = (price) => {
    setTotal(Number(total) - price)
  }
  
  const addStylestToItems = (name) => {
    setStylist(name)
    const additionalDetails = additionalItems[0].additionalDetails
    const additionalStyling = additionalItems[0].additionalStyling
    setAdditionalItems([additionalItems = {
      stylist: stylist,
      title: title,
      additionalDetails: additionalDetails,
      additionalStyling: additionalStyling,
      total: Number(total)
    }])

  }
  
  const addAdditionalDetails = (e) => {
    e.preventDefault()
    setAdditionalItems([...additionalItems, additionalItems[0].additionalDetails = e.target.value])
  }


  const addToAdditionalItems =  (price, key) => {
    const additionalDetails = additionalItems[0].additionalDetails
    let additionalStyling = additionalItems[0].additionalStyling
    const isThere = additionalItems[0].additionalStyling.some(item => item === key)
    if (!isThere) {
      add(price)

      setAdditionalItems([...additionalItems, additionalStyling.push(key)])
      setAdditionalItems([additionalItems = {
        stylist: stylist,
        title: title,
        total: Number(total) ,
        additionalDetails: additionalDetails,
        additionalStyling: additionalStyling
      }])


    } else {
      subtract(price)
      setAdditionalItems([additionalItems = {
        stylist: stylist,
        title: title,
        total: Number(total) ,
        additionalDetails: additionalDetails,
        additionalStyling: additionalStyling.filter(item => item !== key)
      }])

    }
    console.log(total, 'TOTAL')


  }

  

  useEffect(() => {
    console.log(total, 'kjlasbv;kjqnv')
    setTotal(total)
  },[total])
  
    return (
    <>
    <div className=' grid grid-cols-1  p-8 sm:p-12 sm:grid-cols-2 sm:place-content-center sm:content-center'style={{
        backgroundImage: `url(${pinkBg})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        }} >
        <div className='sm:order-first'> 
          <Dropdown className="mb-4">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Choose Stylist
            </Dropdown.Toggle>
                
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>addStylestToItems('Random')} id='Random'>Random</Dropdown.Item>
              <Dropdown.Item onClick={()=>addStylestToItems('Jennifer')} id='Jennifer'>Jennifer</Dropdown.Item>
              <Dropdown.Item onClick={()=>addStylestToItems('LouAnn')} id='LouAnn'>LouAnn</Dropdown.Item>
              <Dropdown.Item onClick={()=>addStylestToItems('Mary')} id='Mary'>Mary</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            <p>Additions:</p>
            <Form>
            {Object.entries(additionalStyling).map(([key, value]) => (
                <div key={`${key}`} className="mb-3">
                  <Form.Check 
                    type={'checkbox'}
                    id={key}
                    label={`${key} $${value}`}
                    onClick={async()=>{ await addToAdditionalItems(Number(value), key )}}
                  />
                </div>
              ))}
              <Form.Group className="w-[85%] mb-3 sm:w-[50%]" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Details:</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={addAdditionalDetails} />
             </Form.Group>
            </Form>
              <input type="file" id="myFile" name="filename"/>
          <p><strong>Total:</strong> <span>{currencyFormatter.format(total)}</span></p>
            <CustomerForm items={additionalItems[0]}/>
        </div>
          
        <div className='order-first pt-2 grid justify-items-center mb-4 sm:place-items-center border-4 border-double border-purple-500/75 shadow-2xl bg-white'>
          <h2 className=''>You Have Selected</h2>
            <div className=''>
               <img src={photo} width={200} height={200} alt='image'/>
            </div>
           <div className='relative'>

            <p className=''>{title}</p>
            <p>Your Stylist will be <span className='text-blue-500'>{additionalItems[0].stylist}</span></p>
            <ul>
              
              {additionalItems[0].additionalStyling.map(item => {
               
                return (
                  <li key={item}>
                    {item}              
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div> 
    </>
  )
}





