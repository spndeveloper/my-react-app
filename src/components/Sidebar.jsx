import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};
const menuItems = [
  { icon: HomeOutlined, label: "Home", path: "/" },
  { icon: UserOutlined, label: "About", path: "/about" },
  { icon: DashboardOutlined, label: "Dashboard", path: "/dashboard" },
];
const items = menuItems.map((item) => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: <Link to={item.path}>{item.label}</Link>,
}));
const SideBar = ({ collapsed }) => {
  return (
    <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/"]}
        items={items}
      />
    </Sider>
  );
};
export default SideBar;
