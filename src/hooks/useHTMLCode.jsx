import { useContext, useEffect, useState } from "react";
import { HTMLContext } from "../provaider/HTMLProvaider";

const useHTMLCode = () => {
  const all = useContext(HTMLContext);
  const [code, setCode] = useState(all);
  useEffect(() => {
    setCode(all);
  }, [all]);
  return code;
};

export default useHTMLCode;
