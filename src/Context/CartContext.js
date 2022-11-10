import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  isInCart: () => {},
  addToCart: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getFromCart = (id) => {
    return cart.find((ord) => ord.id === id);
  };

  const isInCart = (id) => {
    return id !== undefined ? getFromCart(id) : undefined;
  };

  const addToCart = (obj) => {
    if (isInCart(obj && obj.id)) {
      console.log("Elemento con id ya existente");
      return;
    }
    // no existe elemento con ese id
    setCart([...cart], obj);
    
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}
