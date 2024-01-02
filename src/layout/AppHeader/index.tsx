import { Menu, type MenuProps } from "antd";
import { HomeOutlined, SearchOutlined, UserOutlined, BookOutlined, MacCommandOutlined } from "@ant-design/icons";
import "./menu.css";

const menuItems: MenuProps["items"] = [
  {
    label: "主页",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "搜索",
    key: "search",
    icon: <SearchOutlined />,
  },
  {
    label: "诗人",
    key: "poet",
    icon: <UserOutlined />,
  },
  {
    label: "韵律",
    key: "rhythm",
    icon: <BookOutlined />,
  },
  {
    label: "诗集",
    key: "poems",
    icon: <MacCommandOutlined />,
  },
];

const AppHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-2xl font-bold">诗词自动生成系统</div>
      <div className="w-108">
        <Menu defaultSelectedKeys={["home"]} mode="horizontal" items={menuItems}></Menu>
      </div>
    </div>
  );
};

export default AppHeader;
