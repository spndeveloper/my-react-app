import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "gray" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default FooterComponent;
