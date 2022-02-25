import { Button, Col, Form, Row } from "antd";
import React from "react";
import { searchFields } from "./search-fields";

export const UserSearchForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    await props.handleSearchForm(values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{searchFields}</Row>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
