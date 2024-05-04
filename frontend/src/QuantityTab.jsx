import React, { useState } from 'react'
import "./QuantityTab.css";

const QuantityTab = ( {totalPrice, onOrderSubmit, orderNumber}) => {

    const [mobileNumber, setMobileNumber] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handelMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handelQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handelSubmit = async() => {
        await onOrderSubmit(mobileNumber, ['alooTiki', 'paneer' , 'cheese'], quantity);
        setOrderPlaced(true);
    };

    const handleClose = () => {
        setOrderPlaced(false);
    };

  return (
    <div className='quantity-tab'>
        <h2>Quantity</h2>
        <input type="number" min="1" value={quantity} onChange={handelQuantityChange} />

        <h2>Mobile Number</h2>
        <input type="text" value={mobileNumber} onChange={handelMobileNumberChange} />

        <button onClick={handelSubmit}>Submit Order</button>
        {
            orderNumber && orderPlaced && (
                <div className='popup' >
                    <p>Thank you for Placing Order</p>
                    <p>Your order number is {orderNumber}</p>
                    <button onlClick={handleClose}>Close</button>
                </div>
            )
        }
        <p>Total Price : ${totalPrice * quantity}</p>
    </div>
  )
}

export default QuantityTab