import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderComponent from "../../components/header";
import MenuComponent from "../../components/menu";
import DashboardView from "../dashboard";
import ListUsersView from "../user";
import "./style.css";

class AppView extends Component {
  state = {};

  render() {
    return (
      <Layout hasSider>
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
          <MenuComponent />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <Switch>
                <Route
                  exact
                  path={["/home", "/", "", "/dashboard"]}
                  component={DashboardView}
                />
                <Route exact path="/users" component={ListUsersView} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppView;
