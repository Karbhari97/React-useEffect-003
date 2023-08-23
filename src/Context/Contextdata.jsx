import { createContext } from "react";
import { useState } from "react";

let gitContext = createContext();

export default gitContext;

export function GitProviderContext({ children }) {
  let [userInfo, setUserInfo] = useState([]);

  const add = (data) => {
    setUserInfo(data);
  };

  return (
    <gitContext.Provider value={{ userInfo, add }}>
      {children}
    </gitContext.Provider>
  );
}
