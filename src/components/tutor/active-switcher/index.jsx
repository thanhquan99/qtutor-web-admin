import { Switch } from "antd";
import React from "react";
import tutorApi from "../../../api/tutor.api";

class TutorActiveSwitcher extends React.Component {
  onChange = async (value) => {
    const { tutor } = this.props;
    await tutorApi.updateOne(tutor.id, { isActive: value });
  };

  render() {
    const { tutor } = this.props;
    return (
      <>
        <Switch onChange={this.onChange} defaultChecked={tutor.isActive} />
      </>
    );
  }
}

export default TutorActiveSwitcher;
