import { createContext, useState } from "react";

export const HTMLContext = createContext();

const HTMLProvaider = ({ children }) => {
  const [HTMLCode, setHTMLCode] = useState("");
  const all = {
    HTMLCode,
    setHTMLCode,
  };
  return <HTMLContext.Provider value={all}>{children}</HTMLContext.Provider>;
};

export default HTMLProvaider;
