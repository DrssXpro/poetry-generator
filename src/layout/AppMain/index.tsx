import PLoading from "@/components/PLoading";
import { useRoutes } from "react-router-dom";
import { routes } from "@/routers/index";
import { Suspense } from "react";

const AppMain = () => {
  return (
    <div className="m-auto w-200 border-1 border-[#000] h-100">
      <Suspense fallback={<PLoading />}> {useRoutes(routes)}</Suspense>
    </div>
  );
};

export default AppMain;
