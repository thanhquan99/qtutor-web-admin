import _ from "lodash";
import { Component } from "react";
import {
  positions,
  Provider as AlertProvider, transitions, types
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import eventBus from "./common/EventBus";
import AdminBoard from "./components/admin-board/admin-board.component";
import Login from "./components/auth/login.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!_.isEmpty(user)) {
      this.setState({
        currentUser: user,
      });
    }

    eventBus.on("logout", () => {
      this.logout();
    });
    eventBus.on("login", () => {
      this.login();
    });
  }

  componentWillUnmount() {
    eventBus.remove("logout");
    eventBus.remove("login");
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    this.setState({
      currentUser: undefined,
    });
    window.location.reload();
  }

  login() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({
      currentUser: user,
    });
  }

  render() {
    const { currentUser } = this.state;
    const alertOptions = {
      position: positions.TOP_RIGHT,
      timeout: 5000,
      offset: "30px",
      transition: transitions.FADE,
      type: types.INFO,
    };

    return (
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">QTutor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {!_.isEmpty(currentUser) && (
                <Nav>
                  <NavDropdown
                    title={currentUser.profile.name}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="/users/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.logout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/admin-board" component={AdminBoard} />
        </Switch>
      </AlertProvider>
    );
  }
}

export default App;
