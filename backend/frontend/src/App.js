import './App.css';
import BurgerBulder from './BurgerBulder';
import QuantityTab from './QuantityTab';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [totalPrice, setTotalPrice] = useState(0);
  const [orderNumber, setOrderNumber] = useState('');

  const handelPriceUpdate = (newPrice) => {
    setTotalPrice(newPrice);
  }

  const handelOrderSubmit = async(mobileNumber, burgerDetals, quantity) => {
    try {
      const response = await axios.post('http://localhost:8080/api/orders', {
        mobileNumber,
        burgerDetals,
        quantity
      })
      setOrderNumber(response.data._id);
    } catch (error) {
      console.log("Error Submiting Order", error);
    }
  }

  return (
    <div className="App">
      <h1>Burger Builder</h1>
      <BurgerBulder onPriceUpdate={handelPriceUpdate}/>
      <QuantityTab 
        totalPrice={totalPrice}
        onOrderSubmit={handelOrderSubmit}
        orderNumber={orderNumber}
      />
    </div>
  );
}

export default App;
