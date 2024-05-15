import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
  const [data, setData] = useState([]);

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

  console.log(data)

  
  return (
    <>
      <Navigation />
      <Outlet context={[data, setData]} />
    </>
  );
}


