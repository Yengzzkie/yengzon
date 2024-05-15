import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";


export default function ProductPage() {
  
  const [data] = useOutletContext();
  
  return (
    <>
      <h1>Products Page</h1>
      {data.map(item => <li key={item.id}><Link to={`/products/${item.id }`}>{item.title}</Link></li>)}
    </>
  );

}

