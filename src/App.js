import _ from "lodash";
import { Component } from "react";
import {
  positions,
  Provider as AlertProvider,
  transitions,
  types,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import eventBus from "./common/EventBus";
import AdminBoard from "./components/admin-board/admin-board.component";
import { withRouter } from "react-router-dom";

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
    } else {
      this.props.history.push("/login");
    }

    eventBus.on("login", () => {
      this.login();
    });
  }

  componentWillUnmount() {
    eventBus.remove("login");
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    this.setState({
      currentUser: undefined,
    });
    eventBus.dispatch("logout");
    this.props.history.push("/login");
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
              <Nav className="me-auto"></Nav>
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

        <AdminBoard />
      </AlertProvider>
    );
  }
}

export default withRouter(App);
