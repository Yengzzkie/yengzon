import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [data] = useOutletContext();

  const currentProduct = data.find(item => item.id === id);
  console.log(id);

  return (
    <>
      <h1>Product Details</h1>
      <p>{id}</p>
      <p>{currentProduct.title}</p>
    </>
  );
}
