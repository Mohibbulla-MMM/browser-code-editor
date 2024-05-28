import useCSSCode from "../../hooks/useCSSCode";
 

 

const CSS = ({tabShow}) => {
    const { setCSSCode } = useCSSCode();

    return (
      <div className={`${!tabShow ? 'block' :'hidden'} w-full h-full p-0`}>
        <textarea
          translate="no"
          className="w-full h-[90vh] notranslate border-none outline-none p-1 px-2"
          onChange={(e) => {
            setCSSCode(e.target.value);
          }}
          placeholder="CSS code type here"
        ></textarea>
      </div>
    );
  };
export default CSS;