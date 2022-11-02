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
    const [total, setTotal] = useState(0)
    const [items, setItems] = useState([])
    const [stylist, setStylist] = useState('Random')


  let additionalStyling 
  if (title.match('Nails')) {
    additionalStyling = additionalStylingNails
  } else if (title.match('Eye')) {
    additionalStyling = additionalStylingLashes
  } else {
    additionalStyling = additionalStylingHair
  }

  const add = (price) => {
    setTotal(price + Number(total))
  }
  const subtract = (price) => {
    setTotal(Number(total) - price )
  }
  const addStylestToItems = (name) =>{
    setStylist(name)
  }

  const addToItems = (price, id) => {
    const itemToAdd = { id: id }
    const isThere = items.some(item => item.id === itemToAdd.id) //USED TO COMPARE OBJECTS AND CHECK IF INSIDE ARRAY
    if (!isThere) {
      setItems([...items, { id: id }])
      add(price)
    } else {
      subtract(price)
      setItems(items => {
        return items.filter(item => item.id !== id)
      })
    }
  }

    useEffect(() => {
        setTotal(price) 
    },[])
    return (
          <>
    <div className='p-12 grid grid-cols-2 place-content-center content-center'style={{
            backgroundImage: `url(${pinkBg})`,
            width: '100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} >
        <div className=''> 
        <Dropdown className="mb-4">
            <Dropdown.Toggle id="dropdown-autoclose-true">
                Choose Stylist
            </Dropdown.Toggle>
                
            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>addStylestToItems('Random')} id='Jennifer'>Random</Dropdown.Item>
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
                    onClick={()=>{addToItems(Number(value), key )}}
                  />
                </div>
              ))}
              <Form.Group className="mb-3 w-[50%]" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Details:</Form.Label>
                <Form.Control as="textarea" rows={3} />
             </Form.Group>
            </Form>
              <input type="file" id="myFile" name="filename"/>
          <p><strong>Total:</strong> <span>{currencyFormatter.format(total)}</span></p>
            {/* <Calendar items={items}  className='float-left'/> */}
            <CustomerForm additionalItems={items}/>
          </div>
          
        <div className='grid place-items-center border-4 border-double border-purple-500/75 shadow-2xl relative bg-white'>
          <h2 className=' top-2'>You Have Selected</h2>
            <div className=''>
               <img src={photo} width={200} height={200} alt='image'/>
            </div>
           <div className='relative'>

            <p className=''>{title}</p>
            <p>Your Stylist will be <span className='text-blue-500'>{stylist}</span></p>
            <ul>
              
              {items.map(item => {
               
                return (
                  <li key={item.id}>
                    {item.id}              
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





