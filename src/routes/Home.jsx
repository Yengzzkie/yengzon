import "../styles/Home.css";
import HeroImage from "../assets/clothing.png";

export default function Home() {
  return (
    <div className="hero">
      <div className="slogan">
        <h1>Discover Endless Possibilities</h1>
        <p>Your One-Stop Destination for Apparel and Electronics</p>
      </div>

      <div className="image-wrapper">
        <img src={HeroImage} className="logo" alt="hero-image" />
      </div>
    </div>
  );
}
