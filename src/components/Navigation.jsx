import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../routes/Root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navigation.css";
import logo from "../assets/logo.png";

export default function Navigation() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">
        <img src={logo} className="nav-logo" alt={logo} />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/products/mens"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
            <span>Men&apos;s Clothing</span>
          </Link>
        </li>
        <li>
          <Link to={"/products/womens"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
            <span>Women&apos;s Clothing</span>
          </Link>
        </li>
        <li>
          <Link to={"/products/jewelries"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
            <span>Jewelries</span>
          </Link>
        </li>
        <li>
          <Link to={"/products/electronics"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
            <span>Electronics</span>
          </Link>
        </li>
        <li>
          <Link to={"/products"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
            <span>All Products</span>
          </Link>
        </li>

        <li>
          <Link to={"/products/cart"}>
            <div className="cart-items">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              {cart.length > 0 ? <p>{cart.length}</p> : null}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
