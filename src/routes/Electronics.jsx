import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext, AddToCartContext } from "./Root";
import "../styles/ProductPage.css";

export default function Electronics() {
  const data = useContext(DataContext);
  const { handleAddToCart } = useContext(AddToCartContext);
  const products = data.data;
  console.log(data);

  const filteredItems = products.filter(item => item.category === "electronics")

  return (
    <div className="product-page-wrapper">
      <h1>Products Page</h1>
      <div className="product-page">
        {filteredItems.map((product) => (
          <li key={product.id}>
            <div className="product-list">
              <img
                src={product.image}
                className="product-image"
                alt={product.title}
              />
              <Link to={`/products/${product.id}`}>
                <p>{product.title}</p>
              </Link>
              <span>${product.price}</span>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
