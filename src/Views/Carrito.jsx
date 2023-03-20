import React, { useContext } from 'react'
import ContextoGlobal from '../Context/ContextoGlobal'
import {Button} from 'react-bootstrap'
import { calculaTotal } from '../utils/utils'
import { NavLink } from 'react-router-dom'

const Carrito = () => {
  const { pizzasPedidas,totalPedido,setPizzasPedidas,setTotalPedido } = useContext(ContextoGlobal)

  const disminuirCantidad = (id) =>{
    const idx = pizzasPedidas.findIndex((p) => p.id === id)
    if (idx >=0) {
      if (pizzasPedidas[idx].cant > 0){
        pizzasPedidas[idx].cant -= 1;
        if (pizzasPedidas[idx].cant === 0){
            pizzasPedidas.splice(idx,1)
        }

        setPizzasPedidas([...pizzasPedidas] );
      }
    } 
    const totalPedidoActual = calculaTotal (pizzasPedidas);
    setTotalPedido(totalPedidoActual) 
  }

  const aumentarCantidad = (id) =>{
    const idx = pizzasPedidas.findIndex((p) => p.id === id)
    if (idx >=0) {
      pizzasPedidas[idx].cant += 1;
      setPizzasPedidas([...pizzasPedidas] );
    } 
    const totalPedidoActual = calculaTotal (pizzasPedidas);
    setTotalPedido(totalPedidoActual)
  }

  return (
    <div className='p-5'>
      <h3>Detalle del Pedido</h3>
      <div className='bg-light w-75 m-auto p5'>
      <div  className='d-flex justify-content-between py-2'>
              <div className='d-flex w-50 justify-content-between align-item-center'></div> 
              <h6 className='mb-0 text-capitalize p-2'>Producto</h6>
              <div className='d-flex w-50 justify-content-between align-item-center'></div>
              <h6 className='mb-0 p-2 text-success w-50'>
                Subtotal
              </h6>
              <strong className='w-50 '>Cantidad</strong>
            </div>
        {
          pizzasPedidas.map((p,i) => {
            return (<div key={i} className='d-flex justify-content-between py-2'>
              <div className='d-flex w-50 justify-content-between align-item-center'></div> 
              <img src={p.img} width='50' alt='imagen pizza'></img>
              <h6 className='mb-0 text-capitalize p-2'><NavLink to={`/detalle/${p.id}`}>{p.name}</NavLink></h6>
              <div className='d-flex w-50  justify-content-between align-item-center'></div>
              <h6 className='mb-0 p-2 text-success w-50 '>
                $ {(p.price*p.cant)}
              </h6>
              <div className='w-50 text-center '>
              
                <Button variant='danger' onClick={()=>disminuirCantidad(p.id)}>-</Button>
                <strong className='px-5'>{p.cant}</strong>
                <Button variant='success' onClick={()=>aumentarCantidad(p.id)}>+</Button>
            
              </div>
              

            </div>)

          })
        }
        <div><b>Total Pedido : </b>$ {totalPedido}</div>
      </div>




    </div>
  )
}

export default Carrito