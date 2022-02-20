import { Button, Col, Form, Input, Row } from "antd";
import { Component } from "react";
import authApi from "../../api/auth.api";

class LoginView extends Component {
  state = {
    currentUser: {},
  };

  onFinish = async (values) => {
    const res = await authApi.login(values);
    if (res) {
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("accessToken", res.accessToken);
      window.location.reload();
    }
  };

  render() {
    return (
      <>
        <Row style={{ marginBottom: 200 }}></Row>
        <Row>
          <Col span={8} offset={8} style={{}}>
            <Form
              name="form-login"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              autoComplete="off"
            >
              <h2 className="text-center text-primary">Login</h2>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Required", type: "email" }]}
                style={{ width: 500 }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Required" }]}
                style={{ width: 500 }}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default LoginView;
