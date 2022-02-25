import { Table } from "antd";
import _ from "lodash";
import React, { Component } from "react";
import { SORTER_ORDER } from "../../constant";
import { dataColumns } from "./table-column";
import studentApi from "../../api/student.api";
import { StudentSearchForm } from "../../components/student/search-form";

class ListStudentsView extends Component {
  state = {
    students: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
    filter: {},
    orderBy: {},
    customFilter: {},
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
    const newFilter = {};
    if (_.isBoolean(filter.isActive)) {
      console.log(filter)
      newFilter.isActive = filter.isActive;
    }
    await this.setState({ customFilter: filter, filter: newFilter });
    await this.fetchData();
  };

  fetchData = async () => {
    this.setState({ loading: true });

    const { pagination, filter, orderBy, customFilter } = this.state;
    const res = await studentApi.getMany({
      perPage: pagination.pageSize,
      page: pagination.current,
      filter: JSON.stringify(filter),
      customFilter: JSON.stringify(customFilter),
      orderBy: _.isEmpty(orderBy)
        ? JSON.stringify({ createdAt: "DESC" })
        : JSON.stringify(orderBy),
    });

    if (res) {
      this.setState((curState) => ({
        loading: false,
        students: res.results,
        pagination: {
          ...curState.pagination,
          total: res.total,
        },
      }));
    }
  };

  render() {
    const { students, pagination, loading } = this.state;
    return (
      <div>
        <StudentSearchForm handleSearchForm={this.handleSearchForm} />
        <Table
          columns={dataColumns}
          rowKey={(record) => record.id}
          dataSource={students}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default ListStudentsView;
