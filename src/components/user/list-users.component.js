import React, { Component } from "react";
import { withAlert } from "react-alert";
import ReactPaginate from "react-paginate";
import userService from "../../api-services/user.service";
import UserAPIContext from "../../context/user-api.context";
import UserFilter from "./user-filters.component";
import User from "./user.component";

class ListUsers extends Component {
  static contextType = UserAPIContext;
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {};
  }

  async componentDidMount() {
    const { alert } = this.props;
    const data = await userService.getMany({
      component: this,
      alert,
      qs: this.context,
    });
    this.setState((curState) => ({
      ...curState,
      users: data.results,
      total: data.total,
    }));
  }

  async handlePageClick(e) {
    this.context.page = e.selected + 1;
    const data = await userService.getMany({
      component: this,
      alert,
      qs: this.context,
    });
    console.log(data);
    this.setState((curState) => ({
      ...curState,
      users: data.results,
      total: data.total,
    }));
  }

  async handleFilter() {
    const data = await userService.getMany({
      component: this,
      alert,
      qs: this.context,
    });
    this.setState((curState) => ({
      ...curState,
      users: data.results,
      total: data.total,
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Users</h4>
              </div>
              <UserFilter handleFilter={this.handleFilter}></UserFilter>
              <div className="card-body">
                <div
                  className="table-responsive"
                  id="proTeamScroll"
                  tabIndex="2"
                  style={{
                    height: "1000",
                    overflow: "hidden",
                    outline: "none",
                  }}
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Birth Day</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users?.map((user) => {
                        return <User user={user} key={user.id} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <ReactPaginate
            nextLabel=">>"
            onPageChange={this.handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(this.state.total / 10)}
            previousLabel="<<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    );
  }
}

export default withAlert()(ListUsers);
