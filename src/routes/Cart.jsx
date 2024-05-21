import { useContext } from "react";
import { CartContext } from "./Root";
import "../styles/Cart.css";
import Card from "../components/Card";
import Button from "../components/Button";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  margin: 1em;
  padding: 1em;
`;

const CartCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  padding: 2em 4em;
  margin: 0.5em 0;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;

const PriceCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  max-height: 300px;
  width: 350px;
  padding: 2em;
  margin: 0.5rem 1rem;

  @media screen and (max-width: 1024px) {
    width: auto;
    margin: 0;
  }
`
const CheckoutBtn = styled(Button)`
  background: black;
  border: black;
  color: #fff;
  border-radius: 0;
  margin: 1em 0;
  cursor: pointer;

  &:hover {
    background: tomato;
    color: black;
    border: #fff;
  }
`

export default function Cart() {
  const cart = useContext(CartContext);
  const cartItems = cart.cart;

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPrice = subtotal * 1.13;

  return (
    <CartWrapper className="cart-wrapper">
      {cartItems.length == 0 ? (<h1>Your Cart is Empty</h1>) : (<>
        <ul className="cart-display-wrapper" style={{ listStyleType: "none", padding: 0 }}>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartCard>
              <img src={item.image} alt={item.title} style={{ maxWidth: "100px", height: "auto" }} />
              <p>{item.title}</p>
              <span>${item.price.toFixed(2)}</span> x <span>{item.quantity}</span>
            </CartCard>
          </li>
        ))}
      </ul>
      <PriceCard className="price-card">
        <div className="computation">
          <span>Subtotal:</span>
          <span>Tax: </span>
          <span>Total:</span>
        </div>
        <div className="price">
          <span>${subtotal.toFixed(2)}</span>
          <span>13%</span>
          <span>${totalPrice.toFixed(2)}</span>
        <CheckoutBtn>Checkout</CheckoutBtn>
        </div>

      </PriceCard>
      </>)}
      
    </CartWrapper>
  );
}
