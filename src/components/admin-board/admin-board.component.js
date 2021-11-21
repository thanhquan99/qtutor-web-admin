import _ from "lodash";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import eventBus from "../../common/EventBus";
import { UserAPIProvider } from "../../context/user-api.context";
import Login from "../auth/login.component";
import ListUsers from "../user/list-users.component";
import Sidebar from "./sidebar.component";

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

    eventBus.on("login", () => {
      this.login();
    });
    eventBus.on("logout", () => {
      this.logout();
    });
  }

  componentWillUnmount() {
    eventBus.remove("logout");
    eventBus.remove("login");
  }

  logout() {
    this.setState({
      currentUser: undefined,
    });
  }

  login() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({
      currentUser: user,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="">
        <div id="wrapper" className="wrapper-content">
          {!_.isEmpty(this.state.currentUser) && <Sidebar />}

          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <Switch>
                    <Route exact path="/login" component={Login} />
                    <UserAPIProvider
                      value={{
                        perPage: 10,
                        page: 1,
                        orderBy: JSON.stringify({ createdAt: "DESC" }),
                      }}
                    >
                      <Route exact path="/users" component={ListUsers} />
                    </UserAPIProvider>
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
