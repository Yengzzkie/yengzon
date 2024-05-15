import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { prodID } = useParams();
  const [currentProduct, setCurrentProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${prodID}`);
        const data = await response.json();
        setCurrentProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, [prodID])

  return (
    <>
      <h1>Product Details</h1>
      <p>{currentProduct.title}</p>
      <img src={currentProduct.image} alt={currentProduct.title} />
      <p>${currentProduct.price}</p>
      <p>Description: {currentProduct.description}</p>
    </>
  );
}
