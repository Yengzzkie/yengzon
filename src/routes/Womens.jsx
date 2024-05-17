import { useContext } from "react";
import { DataContext, AddToCartContext } from "./Root";
import ItemCard from "../components/ItemCard";
import "../styles/ProductPage.css";

export default function Womens() {
  const data = useContext(DataContext);
  const { handleAddToCart } = useContext(AddToCartContext);
  const products = data.data;
  console.log(data);

  const filteredItems = products.filter(item => item.category === "women's clothing")

  return (
    <div className="product-page-wrapper">
      <h1>Products Page</h1>
      <div className="product-page">
        {filteredItems.map((product) => (
          <ItemCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}
