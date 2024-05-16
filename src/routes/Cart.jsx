import { useContext } from "react";
import { CartContext } from "./Root";
import "../styles/Cart.css";

export default function Cart() {
  const cart = useContext(CartContext);
  const cartItems = cart.cart;
  console.log(cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <ul className="cart-display-wrapper">
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <span>Total: ${totalPrice}</span>
    </div>
  );
}
