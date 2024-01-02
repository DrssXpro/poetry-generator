import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "./styles/reset.css";
import "virtual:windi.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Menu: {
            activeBarBorderWidth: 0,
            iconMarginInlineEnd: 5,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
