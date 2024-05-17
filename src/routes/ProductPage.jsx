import { useContext } from "react";
import { DataContext, AddToCartContext } from "./Root";
import "../styles/ProductPage.css";
import ItemCard from "../components/ItemCard";

export default function ProductPage() {
  const data = useContext(DataContext);
  const { handleAddToCart } = useContext(AddToCartContext);
  const products = data.data;
  console.log(data);

  return (
    <div className="product-page-wrapper">
      <h1>Products Page</h1>
      <div className="product-page">
        {products.map((product) => (
          <ItemCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}
