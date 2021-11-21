import { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/tutors">Tutors</a>
          </li>
          <li>
            <a href="/students">Students</a>
          </li>
          {/* <li className="active">
                <a href="#1">About</a>
              </li>
              <li>
                <a href="#1">Services</a>
              </li>
              <li>
                <a href="#1">Contact</a>
              </li> */}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
