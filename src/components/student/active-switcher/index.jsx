import { Switch } from "antd";
import React from "react";
import studentApi from "../../../api/student.api";

class StudentActiveSwitcher extends React.Component {
  onChange = async (value) => {
    const { student } = this.props;
    await studentApi.updateOne(student.id, { isActive: value });
  };

  render() {
    const { student } = this.props;
    return (
      <>
        <Switch onChange={this.onChange} defaultChecked={student.isActive} />
      </>
    );
  }
}

export default StudentActiveSwitcher;
