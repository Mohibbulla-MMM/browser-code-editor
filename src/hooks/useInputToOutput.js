import { useState } from "react";

const useInputToOutput = () => {
  const [inputCode, setInputCode] = useState('');
  const onKeyDownFN = (e) => {
    const value = e.target.value;
    // console.log(value);
     setInputCode(value);
  };
  //   console.log(inputCode);
  return { inputCode, onKeyDownFN };
};

export default useInputToOutput;
