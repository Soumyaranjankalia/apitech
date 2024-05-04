import React, { useState } from "react";

const BurgerBulder = ({ onPriceUpdate }) => {
  const [slices, setSlices] = useState([]);
  const prices = {
    alooTiki: 10,
    cheese: 20,
    paneer: 30,
  };

  const addSlices = (type) => {
    setSlices([...slices, type]);
    updateTotalPrice(type, true);
  };

  const removeSlices = (type) => {
    const index = slices.indexOf(type);
    if (index !== -1) {
      slices.splice(index, 1);
      setSlices([...slices]);
      updateTotalPrice(type, false);
    }
  };

  const updateTotalPrice = (type, isAdding) => {
    const price = prices[type];
    if (isAdding) {
      onPriceUpdate((prevPrice) => prevPrice + price);
    } else {
      onPriceUpdate((prevPrice) => prevPrice - price);
    }
  };

  return (
    <div>
      <div className="burger">
        <div className="burger-top"></div>
        {slices.map((slices, i) => (
          <div key={i} className={slices}></div>
        ))}
        <div className="burger-bottom"></div>
      </div>

      <div
        className="controls"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          ==================
          <div style={{marginLeft:"150px", display:"flex", flexDirection:"column", alignItems:"center", justifyItems:"center"}}>
          <div style={{ display: "flex", flexDirection: "row", gap:"10px" }}>
            -------------------------------------
            <button style={{borderRadius:"100px", height:"50%"}} onClick={() => addSlices("alooTiki")}>+ </button>
            <button style={{borderRadius:"100px", height:"50%"}} onClick={() => removeSlices("alooTiki")}>-</button>
            <p>Price : {prices.alooTiki}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" , gap:"10px" }}>
            ******************************************
            <button style={{borderRadius:"100px", height:"50%"}} onClick={() => addSlices("cheese")}>+</button>
            <button style={{borderRadius:"100px", height:"50%"}} onClick={() => removeSlices("cheese")}>-</button>
            <p>Price : {prices.cheese}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" , gap:"10px" }}>
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            <button style={{borderRadius:"100px", height:"50%"}} onClick={() => addSlices("paneer")}>+</button>
            <button style={{borderRadius:"100px", height:"50%"}} onClick={() => removeSlices("paneer")}>-</button>
            <p>Price : {prices.paneer}</p>
          </div>
          </div>
          ==================
        </div>
      </div>
    </div>
  );
};

export default BurgerBulder;
