import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  HomeOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import { Link } from "react-router-dom";

class MenuComponent extends React.Component {
  render() {
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" style={{ marginTop: 10 }}></Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default MenuComponent;
