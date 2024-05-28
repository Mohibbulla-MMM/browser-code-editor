// import { Outlet } from "react-router-dom";
import HTML_CSS_JS from "../components/Home/TabsNav/HTML_CSS_JS";
import CSSProvaider from "../provaider/CSSProvaider";
import HTMLProvaider from "../provaider/HTMLProvaider";
import JSProvaider from "../provaider/JSProvaider";
import Header from "../shired/Header";
// import OutPut from "../components/Home/OutPut";
// import TabsNav from "../components/Home/TabsNav/TabsNav";
// import HTML from "../components/Home/HTML";

const MainLayOut = () => {
  // const navHeihgt = 50
  return (
    <div className="w-full h-screen  ">
      <Header />
      <HTMLProvaider>
        <JSProvaider>
          <CSSProvaider>
            <HTML_CSS_JS />
          </CSSProvaider>
        </JSProvaider>
      </HTMLProvaider>
    </div>
  );
};

export default MainLayOut;
