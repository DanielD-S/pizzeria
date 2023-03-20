import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ContextoGlobal from '../Context/ContextoGlobal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';

const Barra = () => {

  const { totalPedido } = useContext(ContextoGlobal);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgb(23, 162, 184)', height: '70px', padding: '25px' }}>
      <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
        to='/'>
        <FontAwesomeIcon icon={faPizzaSlice} />
        Pizza mamma mia
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
        to='/carrito'>

        <Button variant="text" startIcon={<ShoppingCartRounded />}
          sx={{
            color: 'white', // Cambiar el color del texto
          }}>
          <strong> $ {totalPedido}</strong>
        </Button>


      </NavLink>
    </div>
  )
}

export default Barra