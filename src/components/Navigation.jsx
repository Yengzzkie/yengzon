import { Link } from "react-router-dom"
import "../styles/Navigation.css"
import logo from "../assets/logo.png"

export default function Navigation() {
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
            </ul>
        </nav>
    </div>
  )
}
