/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import UserContext from "../../context/UserContext";

const ChildComponent = ({ rootData }) => {
  // console.log(rootData);
  const data = useContext(UserContext);

  return <div>ChildComponent for ProductCard :{data.name} </div>;
};

export default ChildComponent;
