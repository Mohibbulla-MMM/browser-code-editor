import useCSSCode from "../../hooks/useCSSCode";
import useHTMLCode from "../../hooks/useHTMLCode";
import useJSCode from "../../hooks/useJSCode";

const OutPut = () => {
  const { HTMLCode } = useHTMLCode();
  const { CSSCode } = useCSSCode();
  const { JSCode } = useJSCode();

  const allCode = `
  <html> 
    <style> ${CSSCode}</style>
    <body> 
     ${HTMLCode}     
      <script> ${JSCode} </script>
    </body>
  </html>`;

  return (
    <div className="text-black text-xl h-full w-full">
      <iframe srcDoc={allCode}      
      className="w-full h-full block "></iframe>
    </div>
  );
};

export default OutPut;
