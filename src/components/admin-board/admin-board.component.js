import _ from "lodash";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ListUsers from "../user/list-users.component";

class AdminBoard extends Component {
  constructor(props) {
    super(props);

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
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="">
        <div id="wrapper" class="wrapper-content">
          <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
              <li>
                <a href="#1">Dashboard</a>
              </li>
              <li>
                <a href="/admin-board/users">Users</a>
              </li>
              <li>
                <a href="#1">Tutors</a>
              </li>
              <li>
                <a href="#1">Students</a>
              </li>
              {/* <li class="active">
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

          <div id="page-content-wrapper">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <Switch>
                    <Route
                      path="/admin-board"
                      render={({ match: { url } }) => (
                        <>
                          {/* <Route path={`${url}/`} component={Backend} exact />
        <Route path={`${url}/home`} component={Dashboard} /> */}
                          <Route path={`${url}/users`} component={ListUsers} />
                        </>
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminBoard;
