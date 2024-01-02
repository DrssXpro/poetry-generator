import { Spin } from "antd";

const PLoading = () => {
  return (
    <Spin
      className="w-full flex justify-center items-center"
      size="large"
      style={{ height: "calc(100vh - 300px)" }}
    ></Spin>
  );
};

export default PLoading;
