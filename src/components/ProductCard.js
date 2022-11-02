import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import { currencyFormatter } from '../utils/currencyFormatter'

function ProductCard({ cardData }) {
    const navigate = useNavigate()
    const [state, setState] = useState('')
    const setCard = (card) => { //SET EVENT LISTENER
       
        setState(card)
    }
    
    return (
    <>
      <ul>
        <div className='grid grid-cols-3 place-items-center'>
            {cardData.map((card) => {
            const photo = card.photo 
            const myImageStyle = { width: '325px', height: '300px' };
            return (
                
                <li key={card.id} className='m-2 border-2 border-pink-500'>
                    <Card style={{ width: '16rem' }} id={card.id} className=''>
                        <img src={photo}  style={myImageStyle} alt='image' />
                        <Card.Body className='bg-fuchsia-200 '>
                            <Card.Title className='text-purple-900'>{ card.title }</Card.Title>
                            <Card.Text className='text-purple-900'>{ currencyFormatter.format(card.price) } </Card.Text>
                            <Link to={navigate('/Booking', {state:{card:state}})}>
                                <Button variant="primary" onClick={()=>setCard(card)}> Book </Button>
                            </Link>
                        </Card.Body>
                    </Card>       
                </li>
            )
            })} 
            </div>
        </ul>
    </>
    )
 }

 export default ProductCard
