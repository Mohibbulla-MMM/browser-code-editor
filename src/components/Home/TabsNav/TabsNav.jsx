const TabsNav = ({ setTabShow }) => {
  return (
    <div className="w-full flex gap-1 items-center  text-center">
      {/* css tab here */}
      <div
        onClick={() => setTabShow(true)}
        className="cursor-pointer bg-black flex-1 "
      >
        HTML
      </div>
      {/* css tab here */}
      <div
        onClick={() => setTabShow(false)}
        className="cursor-pointer bg-black flex-1 "
      >
        CSS
      </div>
    </div>
  );
};

export default TabsNav;
