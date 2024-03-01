import { v4 as uuidv4 } from "uuid";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
// import { ProductDataSet2 } from "../../api/MockData";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import UserContext from "../../context/UserContext";
import withStockLabel from "../withStockLabel/withStockLabel";
// import { useQuery } from "@tanstack/react-query";

const ProductLayout = () => {
  // This a State Variable --> React useState() - ProductDataSet
  let [ProductDataSet, setProductDataSet] = useState([]);
  let [filterDataSet, setfilterDataSet] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Component Loaded");

  const { SetUserName } = useContext(UserContext);
  console.log(SetUserName);
  // let btnTexts = "Light";
  // State Variable
  const [btnText, setBtnText] = useState("Light");

  /* 
      let arr = useState(MockProductDataSet);

      let ProductDataSet = arr[0];
      let setProductDataSet = arr[1];

      console.log(ProductDataSet,setProductDataSet);
  */

  /* 
    1. Try to Create A State -> useState() -> Named Import  
    2. Try to Assign A Value to State Variable -> anyName
    3. Try to Change The Value of State Variable -> setanyName

    When Ever a State Variable Updates The React will Re Render the Component  
  */

  // This a Variable
  // let ProductDataSets = [
  //   {
  //     title: "Hat",
  //     brand: "MAJIK",
  //     price: 288,
  //     id: 1,
  //     image_url:
  //       "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
  //     rating: "3.6",
  //   },
  //   {
  //     title: "Plain Round Neck T-shirt",
  //     brand: "Huetrap",
  //     price: 395,
  //     id: 2,
  //     image_url:
  //       "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
  //     rating: "4.1",
  //   },
  //   {
  //     title: "Cotton Hoodie",
  //     brand: "Scott International",
  //     price: 498,
  //     id: 3,
  //     image_url:
  //       "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
  //     rating: "3.8",
  //   },
  //   {
  //     title: "Men's Waistcoat",
  //     brand: "LEVIS",
  //     price: 2500,
  //     id: 4,
  //     image_url:
  //       "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
  //     rating: "4.3",
  //   },
  // ];

  // Two Argu - CallBack Function , Denpendency Array

  const rootData = "1";

  const fetchData = async () => {
    const option = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
      },
    };
    const response = await fetch("https://apis.ccbp.in/products/", option);
    const data = await response.json();
    // console.log("data", data);
    setProductDataSet(data.products);
    setfilterDataSet(data.products);
    return data.products;
  };

  // const { data, isError, isFetching, isLoading } = useQuery({
  //   queryKey: ["productData"],
  //   queryFn: fetchData,
  // });
  // console.log(data, isError, isFetching, isLoading);

  useEffect(() => {
    console.log("useEffect call");
    fetchData();
  }, []);

  const ProductCardWithStock = withStockLabel(ProductCard);

  // Conditional Rendering
  // true ? <1> : <2>
  return ProductDataSet.length === 0 ? (
    <ShimmerSimpleGallery card imageHeight={300} caption />
  ) : (
    <>
      {console.log("Component CALLED")}
      <div className="2xl:container">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <div className="flex gap-4 py-5">
            <button
              className="bg-green-500 py-3 px-6"
              onClick={() => {
                console.log("Top Rated Btn Clicked");

                const filterProductData = ProductDataSet.filter((data) => {
                  // console.log("from filter function:", data.rating);
                  return data.rating > 4;
                });
                setProductDataSet(filterProductData);
                // console.log(filterProductData);
              }}>
              Top Rated Product
            </button>

            <button
              className="bg-green-500 py-3 px-6"
              onClick={() => {
                console.log("Top Product Less Than 500 Clicked");

                const filterProductData = ProductDataSet.filter((data) => {
                  return data.price < 500;
                });
                setProductDataSet(filterProductData);
                //console.log(filterProductData)
              }}>
              Top Product Less Than 500
            </button>

            <button
              className="bg-red-500 px-8"
              onClick={() => {
                console.log("Called Button Clicked");
                //btnText = "Dark"
                btnText === "Light" ? setBtnText("Dark") : setBtnText("Light");
                // setBtnText("Dark");
                console.log(btnText);
              }}>
              {btnText}
            </button>

            <div className="space-x-4">
              <input
                className="border border-red-500"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="bg-green-500 px-4 py-2"
                onClick={() => {
                  const filterData = ProductDataSet.filter((e) => {
                    return e.title
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  });

                  setfilterDataSet(filterData);
                  console.log(filterData);
                }}>
                Search
              </button>

              {/* 
              {searchText} */}
            </div>
            <div className="space-x-4">
              <input
                className="border border-red-500"
                onChange={(e) => {
                  // console.log(e.target.value);
                  SetUserName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {filterDataSet.length === 0 ? (
          <p>No Product</p>
        ) : (
          <>
            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filterDataSet.map((e) => {
                // console.log(e);
                // return (
                //   <ProductCard
                //     key={uuidv4()}
                //     id={e.id}
                //     title={e.title}
                //     brand={e.brand}
                //     price={e.price}
                //     rating={e.rating}
                //     img={e.image_url}
                //     rootData={rootData}
                //   />
                // );

                return (
                  <ProductCardWithStock
                    key={uuidv4()}
                    id={e.id}
                    title={e.title}
                    brand={e.brand}
                    price={e.price}
                    rating={e.rating}
                    img={e.image_url}
                    rootData={rootData}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductLayout;
