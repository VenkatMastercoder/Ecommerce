import { useContext } from "react";
import UserContext from "../../context/UserContext";

const About = () => {
  let data = useContext(UserContext);
  console.log(data);

  return (
    <>
      <p>About Page</p>

      <p>name: {data.name}</p>
      <p>dummyData: {data.dummyData}</p>
      <p>loggedin User: {data.loggedinUser}</p>
    </>
  );
};

export default About;
