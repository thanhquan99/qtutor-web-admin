import { Table } from "antd";
import _ from "lodash";
import React, { Component } from "react";
import { SORTER_ORDER } from "../../constant";
import { UserSearchForm } from "../../components/user/serach-form";
import { userColumns } from "./table-column";
import userApi from "../../api/user.api";

class ListUsersView extends Component {
  state = {
    users: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
    filter: {},
    orderBy: {},
  };

  componentDidMount = async () => {
    await this.fetchData();
  };

  handleTableChange = async (pagination, filters, sorter) => {
    if (!_.isEmpty(sorter)) {
      if (sorter.order) {
        const orderBy = {};
        orderBy[sorter.field] = SORTER_ORDER[sorter.order];
        await this.setState({ orderBy });
      } else {
        await this.setState({ orderBy: {} });
      }
    }
    if (!_.isEmpty(pagination)) {
      await this.setState((curState) => ({
        pagination: {
          ...curState.pagination,
          current: pagination.current,
          pageSize: pagination.pageSize,
        },
      }));
    }
    await this.fetchData();
  };

  handleSearchForm = async (filter) => {
    console.log(filter)
    await this.setState({ filter });
    // console.log(this.state);
    // await this.fetchData();
  };

  fetchData = async () => {
    this.setState({ loading: true });

    const { pagination, filter, orderBy } = this.state;
    const res = await userApi.getMany({
      perPage: pagination.pageSize,
      page: pagination.current,
      filter: JSON.stringify(filter),
      orderBy: _.isEmpty(orderBy)
        ? JSON.stringify({ createdAt: "DESC" })
        : JSON.stringify(orderBy),
    });

    if (res) {
      this.setState((curState) => ({
        loading: false,
        users: res.results,
        pagination: {
          ...curState.pagination,
          total: res.total,
        },
      }));
    }
  };

  render() {
    const { users, pagination, loading } = this.state;
    return (
      <div>
        <UserSearchForm handleSearchForm={this.handleSearchForm} />
        <Table
          columns={userColumns}
          rowKey={(record) => record.id}
          dataSource={users}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default ListUsersView;
