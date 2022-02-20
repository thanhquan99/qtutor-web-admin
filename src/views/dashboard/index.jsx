import { Row } from "antd";
import { Component } from "react";
import "./style.css";

class DashboardView extends Component {
  render() {
    return (
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
                    Total Lessons
                  </div>
                  <div class="circle-tile-number text-faded ">{123}</div>
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
                    Total Earn
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {new Intl.NumberFormat().format(453)}
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
                    Total Paid
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {new Intl.NumberFormat().format(789)}
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
                    Total Unpaid
                  </div>
                  <div class="circle-tile-number text-faded ">
                    {new Intl.NumberFormat().format(123)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container bootstrap snippets bootdey">
          <div class="row"></div>
        </div>
      </Row>
    );
  }
}

export default DashboardView;
