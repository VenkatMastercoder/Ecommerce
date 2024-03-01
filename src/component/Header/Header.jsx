import { Link } from "react-router-dom";
import useOnlineStatus from "../../hook/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  const data = useContext(UserContext);
  console.log(data);

  return (
    <>
      <div className="2xl:container bg-slate-300 h-[10vh]">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%]">
          <div className="flex justify-start items-center">
            <Link to="/">
              <p>LOGO</p>
            </Link>
          </div>

          <ul className="flex justify-end items-center space-x-5 h-[100%]">
            <li>{onlineStatus ? "✅ ONLINE" : "❌ OFFLINE"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about-ecommerce">About</Link>
            </li>
            <li>
              <Link to="/cart">View Cart</Link>
            </li>
            <li>{data.loggedinUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

// Default Export

export default Header;
