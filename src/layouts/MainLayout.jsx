import React, { useState } from "react";
import { Layout } from "antd";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";
const { Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} />
      <Layout>
        <HeaderComponent
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
        <Content>
          <Outlet />
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
