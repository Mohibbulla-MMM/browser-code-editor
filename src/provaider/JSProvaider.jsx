import { createContext, useState } from "react";

export const JSContext = createContext();

const JSProvaider = ({ children }) => {
  const [JSCode, setJSCode] = useState("");
  const all = {
    JSCode,
    setJSCode,
  };
  return <JSContext.Provider value={all}>{children}</JSContext.Provider>;
};

export default JSProvaider;
