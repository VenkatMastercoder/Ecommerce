import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import useFetchData from "../../hook/useFetchData";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ProductView = () => {
  const param = useParams();
  const data = useContext(CartContext);
  const { addProduct } = data;
  const productData = useFetchData(param.productId);
  console.log("Cartdata:", data.cartData);

  return (
    <>
      <img src={productData.image_url} className="h-20" />
      <p>{productData.title}</p>
      <p>{productData.price}</p>
      <p>{productData.description}</p>
      <p>{productData.total_reviews}</p>
      <p>{productData.rating}</p>
      <p>{productData.availability}</p>
      <button
        className="bg-red-500 p-5"
        onClick={() => {
          addProduct(productData);
        }}>
        Add Cart Button
      </button>
      {productData.similar_products?.map((e) => {
        return (
          <>
            <ProductCard
              key={uuidv4()}
              title={e.title}
              brand={e.brand}
              price={e.price}
              rating={e.rating}
              img={e.image_url}
            />
          </>
        );
      })}
    </>
  );
};

export default ProductView;
