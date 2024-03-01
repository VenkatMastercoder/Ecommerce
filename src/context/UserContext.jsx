// React Context - Solves Prop Drill - [ SEND Data from Praent to CHILD ]

import { createContext } from "react";

/**
 * How to Create Context - createContext() // Global Object 
 * How to Access Context data - useContext()
 * How to Modify Context data - 
    * <UserContext.Provider value={{dummyData:Modifyed Value}}>
          <Layout/>
      </UserContext.Provider>
*/
// Global Object or Global Data

const UserContext = createContext({
  loggedinUser: "Default User",
  dummyData: "1",
  name:"Venkat"
});

export default UserContext;
