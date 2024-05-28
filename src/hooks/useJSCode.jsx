import { useContext, useEffect, useState } from "react";
import { JSContext } from "../provaider/JSProvaider";

const useJSCode = () => {
  const all = useContext(JSContext);
  const [code, setCode] = useState(all);
  useEffect(() => {
    setCode(all);
  }, [all]);
  return code;
};

export default useJSCode;
