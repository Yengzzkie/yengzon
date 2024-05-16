import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../routes/Root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navigation.css"
import logo from "../assets/logo.png"

export default function Navigation() {
  const { cart } = useContext(CartContext);

  return (
    <div>
        <nav>
            <Link to='/'><img src={logo} alt={logo} /></Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link>Men&apos;s Clothing</Link></li>
                <li><Link>Women&apos;s Clothing</Link></li>
                <li><Link>Jewelries</Link></li>
                <li><Link>Electronics</Link></li>
            </ul>
            <div className="cart-items"><FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            {cart.length > 0 ? (<span>{cart.length}</span>) : (null)}
            </div>
        </nav>
    </div>
  )
}
