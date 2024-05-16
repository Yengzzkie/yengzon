import { useEffect, useState, createContext } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export const DataContext = createContext();
export const CartContext = createContext();
export const AddToCartContext = createContext();

export default function Root() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data)
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, [])

  function handleAddToCart(product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    console.log(cart);
  }
  
  return (
    <>
    <DataContext.Provider value={{ data }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <AddToCartContext.Provider value={{ handleAddToCart }}>
          <Navigation />
          <Outlet />
        </AddToCartContext.Provider>
      </CartContext.Provider>
    </DataContext.Provider>
    </>
  );
}
