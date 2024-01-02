import { Menu, type MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeOutlined, SearchOutlined, UserOutlined, BookOutlined, MacCommandOutlined } from "@ant-design/icons";
import Logo from "@/assets/logo.jpg";
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
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={Logo} className="w-10 h-10" />
        <div className="text-2xl font-bold">诗词自动生成系统</div>
      </div>

      <div className="w-108">
        <Menu
          defaultSelectedKeys={[pathname.slice(1)]}
          mode="horizontal"
          items={menuItems}
          onSelect={({ key }) => {
            nav(key);
          }}
        ></Menu>
      </div>
    </div>
  );
};

export default AppHeader;
