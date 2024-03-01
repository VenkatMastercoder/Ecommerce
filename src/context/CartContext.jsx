/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext({
  cartData: [], // Will HAVE all the Data
  addProduct: () => {}, // Add Product to Cart
  clearCart: () => {}, // Remove All Product From Cart
  removeProduct: () => {}, // Remove only Spe Product from Cart
});

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const addProduct = (data) => {
    setCartData([...cartData, data]);
  };

  const clearCart = () => {
    setCartData([]);
  };

  const removeProduct = (index) => {
    const newProductItems = [...cartData];
    newProductItems.splice(index, 1);
    setCartData(newProductItems);
  };

  return (
    <CartContext.Provider
      value={{ cartData: cartData, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

/**
 * How to Create Context - createContext() // Global Object 
 * How to Access Context data - useContext()
 * How to Modify Context data - 
    * <UserContext.Provider value={{dummyData:Modifyed Value}}>
          <Layout/>
      </UserContext.Provider>
*/
