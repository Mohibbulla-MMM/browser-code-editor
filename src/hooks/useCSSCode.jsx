import { useContext, useEffect, useState } from "react";
import { CSSContext } from "../provaider/CSSProvaider";

const useCSSCode = () => {
  const all = useContext(CSSContext);
  const [code, setCode] = useState(all);
  useEffect(() => {
    setCode(all);
  }, [all]);
  return code;
};

export default useCSSCode;
