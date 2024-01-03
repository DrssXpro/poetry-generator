import PLoading from "@/components/PLoading";
import { useRoutes } from "react-router-dom";
import { routes } from "@/routers/index";
import { Suspense } from "react";
import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

const AppMain = () => {
  const backTop = () => {
    const el = document.querySelector(".Container");
    el!.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="m-auto w-200 ">
      <Suspense fallback={<PLoading />}> {useRoutes(routes)}</Suspense>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 94 }}
        icon={<VerticalAlignTopOutlined />}
        onClick={backTop}
      />
    </div>
  );
};

export default AppMain;
