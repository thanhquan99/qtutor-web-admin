import React, { Component } from "react";
import { Form } from "react-bootstrap";
import UserAPIContext from "../../context/user-api.context";

class UserFilter extends Component {
  static contextType = UserAPIContext;
  constructor(props) {
    super(props);
    this.onEnterName = this.onEnterName.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onEnterEmail = this.onEnterEmail.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.state = {};
  }

  onChangeName = (e) => {
    const name = e.target.value;
    this.context.customFilter = JSON.stringify({
      ...JSON.parse(this.context.customFilter),
      name: { $ilike: name },
    });
  };
  onEnterName = async (e) => {
    if (e.key === "Enter") {
      await this.props.handleFilter();
    }
  };

  onChangeEmail = (e) => {
    const email = e.target.value;
    this.context.filter = JSON.stringify({
      ...JSON.parse(this.context.filter),
      email: { $ilike: email },
    });
  };
  onEnterEmail = async (e) => {
    if (e.key === "Enter") {
      await this.props.handleFilter();
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Form.Control
            id="inlineFormInputName"
            placeholder="Name"
            onKeyDown={this.onEnterName}
            onChange={this.onChangeName}
          />
        </div>
        <div className="col-3">
          <Form.Control
            id="inlineFormInputName"
            placeholder="Email"
            onKeyDown={this.onEnterEmail}
            onChange={this.onChangeEmail}
          />
        </div>
      </div>
    );
  }
}

export default UserFilter;
