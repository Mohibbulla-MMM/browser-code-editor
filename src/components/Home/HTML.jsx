// import useInputToOutput from "../../hooks/useInputToOutput";

import useCode from "../../hooks/useHTMLCode";

const HTML = ({tabShow}) => {
  const { setHTMLCode } = useCode();

  return (
    <div className={`${tabShow ? 'block' :'hidden'} w-full h-full p-0`}>
      <textarea
   
        translate="no"
        className="w-full h-[90vh] notranslate border-none outline-none p-1 px-2"
        onChange={(e) => {
          setHTMLCode(e.target.value);
        }}
        placeholder="HTML code type here"
      ></textarea>
    </div>
  );
};

export default HTML;
