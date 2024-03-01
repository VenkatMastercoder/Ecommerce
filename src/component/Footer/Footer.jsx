import { useContext } from "react";
import "./Footer.css";
import UserContext from "../../context/UserContext";

const Footer = () => {
  const data = useContext(UserContext);

  return <p className="bg">Footer {data.loggedinUser}</p>;
};

export default Footer;
