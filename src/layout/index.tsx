import AppHeader from "./AppHeader";
import AppMain from "./AppMain";

const AppLayout = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-full h-20 py-2 px-5">
        <AppHeader />
      </div>
      <div className="w-full flex-1">
        <AppMain />
      </div>
    </div>
  );
};

export default AppLayout;
