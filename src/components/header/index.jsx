import { Avatar } from "antd";
import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { DEFAULT_AVATAR } from "../../constant";
import "./style.css";

class HeaderComponent extends Component {
  state = {
    currentUser: {},
  };

  componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({ currentUser: user });
  };

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <div className="header mx-5">
          <Nav.Link href="/dashboard">
            <span className="logo">QTutor Admin</span>
          </Nav.Link>
          <Nav>
            <NavDropdown
              title={
                <Avatar
                  src={currentUser?.profile?.avatar || DEFAULT_AVATAR}
                  size={40}
                />
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default HeaderComponent;
