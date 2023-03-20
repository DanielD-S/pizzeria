import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ContextoGlobal from '../Context/ContextoGlobal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPizzaSlice, faEye } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';


const CardPizza = ({ pizza }) => {
  const navigate = useNavigate();
  const { agregarPizza } = useContext(ContextoGlobal)

  const verDetalle = () => {
    navigate(`/detalle/${pizza.id}`)
  }



  return (
    <div>
      <Card style={{ width: '18rem', marginTop: '2em', marginLeft: '2em' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr></hr>
          <div>
            <h5>Ingredientes:</h5>
            <ul>
              {
                pizza.ingredients.map((i) => <li key={i} style={{ listStyleType: "none", textAlign: 'start' }} ><FontAwesomeIcon icon={faPizzaSlice} size="1x" color="orange" /> {i}</li>)
              }
            </ul>
          </div>
          <div>
            <h4>${pizza.price}</h4>
          </div>
          <Button variant="text"
            sx={{
              backgroundColor: 'rgba(0, 0, 255, 0.8)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
              },
            }} onClick={() => verDetalle()}><FontAwesomeIcon icon={faEye} />  Ver más</Button>
          <Button variant="text"
            startIcon={<ShoppingCartRounded />}
            sx={{
              backgroundColor: 'rgba(255, 0, 0, 0.8)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
              },
            }} onClick={() => agregarPizza(pizza)}>Añadir</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardPizza