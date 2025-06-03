import React from "react";
import { theme, Button, Row, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
const HeaderComponent = ({ collapsed, onToggle }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: "gray", color: "white" }}>
      <Row
        gutter={16}
        align="middle"
        style={{ paddingLeft: "16px", paddingRight: "16px" }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
          style={{
            fontSize: "16px",
          }}
          size="small"
        />
        <div>Header</div>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
