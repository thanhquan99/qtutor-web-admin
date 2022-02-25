import { Row, Spin } from "antd";
import { Component } from "react";
import dashboardApi from "../../api/dashboard.api";
import "./style.css";

class DashboardView extends Component {
  state = {
    loading: true,
    data: {},
  };

  componentDidMount = async () => {
    const res = await dashboardApi.getSystemDashboard();
    if (res) {
      this.setState({ data: res, loading: false });
    }
  };

  render() {
    const { data, loading } = this.state;
    return loading ? (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "433px",
          height: "200px",
        }}
        className="spin"
      >
        <Spin />
      </div>
    ) : (
      <Row>
        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="col-lg-3 col-sm-3">
              <div class="circle-tile ">
                <div class="circle-tile-heading dark-blue">
                  <i class="fa fa-book fa-fw fa-2x"></i>
                </div>
                <div class="circle-tile-content dark-blue">
                  <div class="circle-tile-description text-faded">
                    Total Users
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {data.totalUsers}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-3">
              <div class="circle-tile ">
                <div class="circle-tile-heading blue">
                  <i class="fa fa-dollar fa-fw fa-2x"></i>
                </div>
                <div class="circle-tile-content blue">
                  <div class="circle-tile-description text-faded">
                    Total Tutors
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {new Intl.NumberFormat().format(data.totalTutors)}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-3">
              <div class="circle-tile ">
                <div class="circle-tile-heading green ">
                  <i class="fa fa-check fa-fw fa-2x"></i>
                </div>
                <div class="circle-tile-content green">
                  <div class="circle-tile-description text-faded">
                    Total Students
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {new Intl.NumberFormat().format(data.totalStudents)}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-3">
              <div class="circle-tile ">
                <div class="circle-tile-heading red">
                  <i class="fa fa-spinner fa-fw fa-2x"></i>
                </div>
                <div class="circle-tile-content red">
                  <div class="circle-tile-description text-faded">
                    Total Subjects
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {new Intl.NumberFormat().format(data.totalSubjects)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="col-lg-3 col-sm-3">
              <div class="circle-tile ">
                <div class="circle-tile-heading dark-blue">
                  <i class="fa fa-book fa-fw fa-2x"></i>
                </div>
                <div class="circle-tile-content dark-blue">
                  <div class="circle-tile-description text-faded">
                    Total Courses
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {data.totalCourses}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default DashboardView;
