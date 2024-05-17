import { useContext } from "react";
import { DataContext, AddToCartContext } from "./Root";
import ItemCard from "../components/ItemCard";
import "../styles/ProductPage.css";

export default function Electronics() {
  const data = useContext(DataContext);
  const { handleAddToCart } = useContext(AddToCartContext);
  const products = data.data;
  console.log(data);

  const filteredItems = products.filter(item => item.category === "electronics")

  return (
    <div className="product-page-wrapper">
      <h1>Electronics</h1>
      <div className="product-page">
        {filteredItems.map((product) => (
          <ItemCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}
