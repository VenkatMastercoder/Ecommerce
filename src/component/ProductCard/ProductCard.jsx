import { Link } from "react-router-dom";
import ChildComponent from "../ChildComponent/ChildComponent";

const ProductCard = (prop) => {
  // console.log(prop);
  
  const { title, brand, rating, price, img, id, rootData } = prop;
  // console.log(rootData);
  return (
    <>
      <div className="bg-slate-50 shadow-lg">
        <img src={img} alt="ProductImg" className="h-56" />
        <h1>{title}</h1>
        <p>{brand}</p>
        <p>{rating}</p>
        <p>{price}</p>
        <Link to={"/ProductView/" + id}>
          <button className="bg-green-500 py-4 px-8">Buy Now</button>
        </Link>
        <ChildComponent rootData={rootData}/>
      </div>
    </>
  );
};

export default ProductCard;
