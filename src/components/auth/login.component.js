import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import validator from "validator";
import authService from "../../api-services/auth.service";
import { withAlert } from "react-alert";
import eventBus from "../../common/EventBus";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      payload: {
        email: undefined,
        password: undefined,
      },
      errs: {
        email: {
          isValidated: false,
          message: undefined,
        },
        password: {
          isValidated: false,
          message: undefined,
        },
      },
    };
  }

  onChangeEmail(e) {
    const email = e.target.value;
    if (!validator.isEmail(email)) {
      this.setState((curState) => ({
        ...curState,
        errs: {
          ...curState.errs,
          email: {
            isValidated: false,
            message: "Invalid email",
          },
        },
      }));
      return;
    }
    this.setState((curState) => ({
      ...curState,
      payload: {
        ...curState.payload,
        email,
      },
      errs: {
        ...curState.errs,
        email: {
          isValidated: true,
          message: undefined,
        },
      },
    }));
  }

  onChangePassword(e) {
    const password = e.target.value;
    if (!validator.isLength(password, { min: 8 })) {
      this.setState((curState) => ({
        ...curState,
        errs: {
          ...curState.errs,
          password: {
            isValidated: false,
            message: "Password must be grate than 8",
          },
        },
      }));
      return;
    }
    this.setState((curState) => ({
      ...curState,
      payload: {
        ...curState.payload,
        password,
      },
      errs: {
        ...curState.errs,
        password: {
          isValidated: true,
          message: undefined,
        },
      },
    }));
  }

  async handleLogin(e) {
    e.preventDefault();
    const { alert } = this.props;
    const { errs } = this.state;

    for (const key in errs) {
      if (!errs[key].isValidated) {
        return;
      }
    }

    const data = await authService.login({
      payload: this.state.payload,
      alert,
    });
    if (data) {
      eventBus.dispatch("login");
      this.props.history.push("/admin-board");
    }
  }

  render() {
    return (
      <Container className="mt-md-5">
        <Row className="justify-content-md-center">
          <Col
            xs={5}
            className="justify-content-md-center border border-light bg-light"
          >
            <Form noValidate onSubmit={this.handleLogin}>
              <h2 className="text-primary text-center">Login</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.onChangeEmail}
                />
                {this.state.errs.email.message && (
                  <Form.Text className="text-danger ">
                    {this.state.errs.email.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />
                {this.state.errs.password.message && (
                  <Form.Text className="text-danger ">
                    {this.state.errs.password.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withAlert()(Login);
