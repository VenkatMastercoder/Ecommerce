// import { useContext } from "react";
// import CartContext from "../../context/CartContext";
import { useCartContext } from "../../hook/useCartContext";

const ViewCart = () => {
  // const data = useContext(CartContext);
  const data = useCartContext();
  const { removeProduct, clearCart } = data;

  if (data.cartData.length === 0) {
    return <p>Cart is Empty</p>;
  } else {
    return (
      <div>
        <div className="2xl:container">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <div className="py-5">
              <div>
                <button
                  className="bg-black text-white py-3 px-2 rounded-lg"
                  onClick={() => {
                    clearCart();
                  }}>
                  Clear Product
                </button>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1">
            {data.cartData.map((e) => {
              // console.log("sgfr", e);
              return (
                <>
                  <div className="flex justify-evenly items-center gap-6">
                    <img src={e.image_url} alt="ProductImg" className="w-10" />
                    <p>{e.title}</p>
                    <div>
                      <button
                        className="bg-red-500 py-3 px-3 rounded-md"
                        onClick={(e) => {
                          removeProduct(e.id);
                        }}>
                        Remove Product
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};




export default ViewCart;
