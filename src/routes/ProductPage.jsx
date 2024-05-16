import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext, CartContext } from "./Root";
import "../styles/ProductPage.css";

export default function ProductPage() {
  const data = useContext(DataContext);
  const { cart, setCart } = useContext(CartContext);
  const products = data.data;
  console.log(cart);

  function handleAddToCart(product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    console.log(cart);
  }

  return (
    <div className="product-page-wrapper">
      <h1>Products Page</h1>
      <div className="product-page">
        {products.map((product) => (
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
