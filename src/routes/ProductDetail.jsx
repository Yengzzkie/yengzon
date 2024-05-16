import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./Root";

export default function ProductDetail() {
  const { prodID } = useParams();
  const data = useContext(DataContext)
  const products = data.data

  const viewingProduct = products.find(product => product.id == prodID)

  return (
    <>
      <h1>{viewingProduct.title}</h1>
      <img src={viewingProduct.image} alt={viewingProduct.title} />
      <p>${viewingProduct.price}</p>
      <p>{viewingProduct.description}</p>
      <Link to={"/products/"}><button>Continue Shopping</button></Link>
    </>
  );
}
