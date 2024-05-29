import useCSSCode from "../../hooks/useCSSCode";
import useHTMLCode from "../../hooks/useHTMLCode";
import useJSCode from "../../hooks/useJSCode";

const OutPut = () => {
  const { HTMLCode } = useHTMLCode();
  const { CSSCode } = useCSSCode();
  const { JSCode } = useJSCode();
  // console.log(HTMLCode.split(/<|>/));
  const tag = HTMLCode.match(/<[^>]+>/g) || ''
  console.log(tag)
  

  // const tagRegex = /(<[^>]+>)/g;
  // console.log(tagRegex)

  // const colorTags = (input) => {
  //   // Regular expression to match HTML tags
  //   const coloredTags = input.replace(tagRegex,  `<span style="color:green">${tagRegex}</span>`
  //   );
  //   return coloredTags;
  // };
  // const modifiedHTMLCode = colorTags( HTMLCode);

  const allCode = `
  <html> 
    <style> ${CSSCode}
    .colored-tag { color: red;}
    </style>
    <body> 
     ${HTMLCode}     
      <script> ${JSCode} </script>
    </body>
  </html>`;

  return (
    <div className="   h-full w-full">
      <div className="bg-black text-center text-white border-l-4 border-[#252525]">
        Output
      </div>
      <iframe srcDoc={allCode} className="w-full h-screen block "></iframe>
    </div>
  );
};

export default OutPut;
