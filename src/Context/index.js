import React, {createContext, useState} from 'react';

export const CartContext = createContext({});

const index = ({children}) => {
  
const [cart, setCart] = useState([]);
const [existe, setExiste] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        existe, 
        setExiste
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default index;