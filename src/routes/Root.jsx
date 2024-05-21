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
        //initialize quantity prop for quantity modification for cart
        const quantifiedData = data.map(item => ({...item, quantity: 1}))
        setData(quantifiedData)
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, [])

  function handleAddToCart(product) {
    let itemsInCart;

    const duplicate = cart.some(item => item.id === product.id);

    if (duplicate) {
      // If the product is already in the cart, increase its quantity
      itemsInCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      itemsInCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(itemsInCart);
    console.log(itemsInCart);
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
