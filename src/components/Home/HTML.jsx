// import useInputToOutput from "../../hooks/useInputToOutput";

import useHTMLCode from "../../hooks/useHTMLCode";
 

const HTML = ({tabShow}) => {
  const { setHTMLCode } = useHTMLCode();

// console.log('message')
  return (
    <div className={`${tabShow ? 'block' :'hidden'} w-full h-full p-0`}>
      <textarea
        translate="no"
        className="w-full bg-[#131313] h-screen notranslate border-none outline-none p-1 px-2 "
        onChange={(e) => {
          setHTMLCode(e.target.value);
        }}
        placeholder="<HTML /> code type here"
      ></textarea>
    </div>
  );
};

export default HTML;
