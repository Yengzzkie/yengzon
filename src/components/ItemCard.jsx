import { useState } from 'react';
import { Link } from "react-router-dom";

export default function ItemCard({ product, handleAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <li key={product.id}>
      <div className={`product-list ${added ? 'added' : ''}`}>
        <div className="item-image-wrapper">
            <img
              src={product.image}
              className="product-image"
              alt={product.title}
            />
        </div>
        <div className="item-description-wrapper">
            <Link to={`/products/${product.id}`}>
              <p>{product.title}</p>
            </Link>
            <span>${product.price}</span>
            <button
              className={`add-to-cart-btn ${added ? 'added' : ''}`}
              onClick={handleClick}
            >
              {added ? `Added to Cart ✔` : 'Add to Cart'}
            </button>
        </div>
      </div>
    </li>
  );
}
