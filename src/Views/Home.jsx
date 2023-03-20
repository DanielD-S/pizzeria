import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Galeria from '../Components/Galeria'
import Popup from '../Components/Popup';

const Home = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    setPopupOpen(true);
  }, []);
  return (
    <div>
      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        imageSrc="https://solorecetas.com/wp-content/uploads/2017/05/pizza-napolitana-2.jpg"
        alt="Pizzas en oferta"
      />
 
   <Header></Header>
    <Galeria></Galeria>
    </div>
 
  )
}

export default Home