import useCode from "../../hooks/useHTMLCode";

const JS = () => {
  const { setJSCode } = useCode();

  return (
    <div className="h-full bg-red-950">
      <textarea
        translate="no"
        className="flex flex-wrap w-full   h-full"
        onChange={(e) => {
          setJSCode(e.target.value);
        }}
        placeholder="HTML code type here"
      ></textarea>
    </div>
  );
};
export default JS;
