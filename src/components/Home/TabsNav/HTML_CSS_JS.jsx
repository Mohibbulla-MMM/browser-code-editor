// import { Outlet } from "react-router-dom";
// import CSS from "../CSS";
// import HTML from "../HTML";
import OutPut from "../OutPut";
import TabsNav from "./TabsNav";
import HTML from "../HTML";
import CSS from "../CSS";
import { useState } from "react";
// import JS from "../JS";

const HTML_CSS_JS = () => {
  const [tabShow, setTabShow] = useState(true);
  // const handleCodeTabShow = ()=>{

  //  }

  return (
    <div>
      <section className={`grid grid-cols-12 h-[90vh] `}>
        {/* TODO side bar */}
        <div className="col-span-6  h-full bg-[#252525]">
          {/* nav bar */}
          <TabsNav setTabShow={setTabShow} />

          <div className="bg-[#131313] text-gray-400 ">
            <HTML tabShow={tabShow} />
            <CSS tabShow={tabShow} />
          </div>

          {/* html,css and js inner outlet */}
        </div>
        <div className="col-span-6 bg-white">
          <OutPut />
        </div>
        {/* --------- */}
      </section>
    </div>
  );
};

export default HTML_CSS_JS;
