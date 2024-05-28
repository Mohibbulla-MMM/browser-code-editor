import { createContext, useState } from "react";

export const CSSContext = createContext();

const CSSProvaider = ({ children }) => {
  const [CSSCode, setCSSCode] = useState("");
  const all = {
    CSSCode,
    setCSSCode,
  };
  return <CSSContext.Provider value={all}>{children}</CSSContext.Provider>;
};

export default CSSProvaider;
