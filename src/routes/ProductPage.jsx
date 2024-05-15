import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "../styles/ProductPage.css";

export default function ProductPage() {
  const { data } = useOutletContext();
  console.log(data);

  return (
    <div>
      <h1>Products Page</h1>
      <div className="product-page">
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt={item.title} />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
