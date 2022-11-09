import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { currencyFormatter } from '../utils/currencyFormatter'
import '../index.css'

function ProductCard({ cardData }) {
    const navigate = useNavigate()
       

    return (

        <ul>
            <div className='grid grid-cols-2 mt-4 sm:grid-cols-3' >
                {cardData.map((card) => {
                    const photo = card.photo 

                    return (
                        
                        <li key={card.id} className='mr-2 mb-2 border-2 border-pink-500 w-fit '>
                            <Card id={card.id} className='card relative'>
                                <img src={photo} id='cardPhoto' alt='image' />
                                <Card.Body className='bg-fuchsia-200 h-36 '>
                                    <Card.Title className='text-purple-900'>{ card.title }</Card.Title>
                                    <Card.Text className='text-purple-900'>{currencyFormatter.format(card.price)} </Card.Text>
                                    
                                    <Button variant="primary" className='absolute bottom-2 left-2' onClick={() => 
                                        navigate('/Booking', { state: { card: card } })}>
                                        Book
                                    </Button>
                                </Card.Body>
                            </Card>       
                        </li>
                    )
                })} 
            </div>
        </ul>
           
        
   
        
   
    )
}

 export default ProductCard
