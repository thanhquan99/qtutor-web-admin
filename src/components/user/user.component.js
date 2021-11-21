import React, { Component } from "react";
import { withAlert } from "react-alert";
import { DEFAULT_AVATAR } from "../../constant";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <tr>
        <td className="table-img">
          <img
            src={DEFAULT_AVATAR}
            alt=""
          />
        </td>
        <td>
          <h6 className="mb-0 font-13">{user.profile?.name}</h6>
          <p className="m-0 font-12">
            <span className="col-green font-weight-bold">{user.email}</span>
          </p>
        </td>
        <td>{user.profile?.dateOfBirth}</td>
        <td>
          <div className="badge-outline col-red">High</div>
        </td>
        <td className="align-middle">
          <div className="progress-text">50%</div>
          <div className="progress" data-height="6" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-success"
              data-width="50%"
              style={{ width: "50%" }}
            ></div>
          </div>
        </td>
        <td>
          <button>
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button>
            <i className="far fa-trash-alt"></i>
          </button> 
        </td>
      </tr>
    );
  }
}

export default withAlert()(User);
