import { useEffect, useState, createContext } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export const DataContext = createContext();
export const CartContext = createContext();

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
  
  return (
    <>
    <DataContext.Provider value={{ data }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navigation />
        <Outlet />
      </CartContext.Provider>
    </DataContext.Provider>
    </>
  );
}
