import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import styled from 'styled-components';

export default function ItemCard({ product, handleAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const Card = styled.div`
    box-shadow: 0 0 5px #ccc;
    border-radius: 15px;
    max-height: 500px;
  `

  return (
    <Card>
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
            <Button
              className={`add-to-cart-btn ${added ? 'added' : ''}`}
              onClick={handleClick}>
              {added ? `Added to Cart ✔` : 'Add to Cart'}
            </Button>
        </div>
      </div>
    </li>
    </Card>
  );
}
