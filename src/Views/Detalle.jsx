import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../Context/ContextoGlobal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';

const Detalle = ({pizza}) => {
const {id} = useParams();
const {pizzas,agregarPizza} = useContext(ContextoGlobal);

const pizzaDetalle = pizzas.filter((p)=>p.id ===id);


  return (
    <div>
    <Card style={{ width: '18rem', marginTop:'1em' }}>
    <Card.Img variant="top" src={pizzaDetalle[0].img} />
    <Card.Body>
      <Card.Title>{pizzaDetalle[0].name}</Card.Title>
      <hr></hr>
      <div>
        <h5>Ingredientes</h5>
        <ul>
          {
            pizzaDetalle[0].ingredients.map((i,e)=> <li key={e} style={{listStyleType: "none",textAlign:'start'}}><FontAwesomeIcon icon={faPizzaSlice} size="1x" color="orange"/> {i}</li>)
          }
        </ul>
      </div>
      <div>
        <h4>${pizzaDetalle[0].price}</h4>
      </div>
      <Button variant="text"
      startIcon={<ShoppingCartRounded />}
      sx={{
        backgroundColor: 'rgba(255, 0, 0, 0.8)', 
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255, 0, 0, 0.7)', 
        },
      }} onClick={()=> agregarPizza(pizzaDetalle[0])}>Añadir</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Detalle