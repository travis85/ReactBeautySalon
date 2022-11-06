import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Calendar from './Calendar';
import pinkBg from '../assets/background/pinkBgPhoto.jpeg'
import headerBg from '../assets/background/headerBackgroundPhoto.jpeg'


export default function CustomerForm({ items }) {
  const additionalItems = items
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [showCalender, setShowCalender] = useState(false)
  const handleConfirm = () => {
    setShowCalender(true)
  }
  console.log(additionalItems,'HERE')
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book Now
      </Button>

      <Modal show={show} onHide={handleClose} >
        <div className='border-2 border-pink-500 rounded-lg'>
          <Modal.Header closeButton style={{backgroundImage: `url(${headerBg})`}}>
          <Modal.Title className='text-pink-500' >Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          backgroundImage: `url(${pinkBg})`,
          width: '100%',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
         }}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className='text-purple-500'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sara Lee"
                onChange={(e)=>setName(e.target.value)}
                autoFocus
              />
            </Form.Group >
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label className='text-purple-500'>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="(123) 456 - 7890"
                onChange={(e)=>setPhoneNumber(e.target.value) }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundImage: `url(${headerBg})`}}>
          <Button className='text-pink-500' onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleConfirm}>
            Confirm
          </Button>
          {showCalender &&
            <Calendar  items={additionalItems} name={name}  phoneNumber={phoneNumber}  />
          }
        </Modal.Footer>
        </div>
        
      </Modal>
    </>
  );
}

