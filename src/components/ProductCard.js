import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import { currencyFormatter } from './currencyFormatter'

function ProductCard({ cardData }) {
    
console.log(cardData )
    return (
      <ul>
        <div className='grid grid-cols-3 place-items-center'>
                {cardData.map((card) => {
                
                const photo = card.photo 
                console.log(photo, 'kljsbviwjfvnwjnv')
                return (
                    <li key={card.id} className='m-2 border-2 border-pink-500'>
                        <Card style={{ width: '16rem' }} id={card.id} className=''>
                            <img src={photo} width={400} height={400} alt='image'/>
                            <Card.Body className='bg-fuchsia-200 '>
                                <Card.Title className='text-purple-900'>{ card.title }</Card.Title>
                                <Card.Text className='text-purple-900'>{ currencyFormatter.format(card.price) } </Card.Text>
                                <Link to={{
                                    pathname: '/Booking',
                                    query: {
                                        price: card.price,
                                        photo: card.photo,
                                        title: card.title,
                                    }
                                }}>
                                    <a href='/'><Button variant="primary"> Book </Button></a>
                                </Link>
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
