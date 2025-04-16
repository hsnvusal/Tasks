import React, { useEffect, useState } from "react";

const BasketPage = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(basketItems);
  }, []);

  const removeFromBasket = (id) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
  
    const index = basket.findIndex(item => item.id === id);
    if (index !== -1) {
      if (basket[index].quantity > 1) {
        basket[index].quantity -= 1;
      } else {
        basket.splice(index, 1); 
      }
    }
  
    localStorage.setItem("basket", JSON.stringify(basket));
    setBasket([...basket]);
  };

  return (
    <div>
      <h2>Səbət</h2>
      {basket.length === 0 ? (
        <p>Səbət boşdur.</p>
      ) : (
        basket.map((item) => (
          <div key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          <img src={item.image} alt=""  style={{width:'100px'}}/>
          <button onClick={() => removeFromBasket(item.id)}>Səbətdən sil</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BasketPage;
