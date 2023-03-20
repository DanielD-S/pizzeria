import React, { useContext } from 'react'
import ContextoGlobal from '../Context/ContextoGlobal.jsx'
import CardPizza from './CardPizza'
import { Row,Col } from 'react-bootstrap'

const Galeria = () => {
    const { pizzas } = useContext(ContextoGlobal);
    return (
        <>
            <Row >
                {
                    pizzas.map((pizza) => {
                        return <Col key={pizza.id}><CardPizza pizza={pizza}></CardPizza></Col>
                    })
                }
            </Row>
        </>
    )
}

export default Galeria