import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";

const AppLayout = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-full h-20 py-2 px-5">
        <AppHeader />
      </div>
      <div className="w-full flex-1">
        <AppMain />
      </div>
      <div className="w-full h-10">
        <AppFooter />
      </div>
    </div>
  );
};

export default AppLayout;
