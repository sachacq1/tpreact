/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';


const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
     name: "" });

  const updateUser = (name) => {
    setUserData({ name });
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
