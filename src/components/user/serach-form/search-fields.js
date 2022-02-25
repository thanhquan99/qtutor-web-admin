import { Col, Form, Input, Select } from "antd";

export const searchFields = [
  <Col span={4}>
    <Form.Item name="name" label="Name">
      <Input />
    </Form.Item>
  </Col>,
  <Col span={4}>
    <Form.Item name="email" label="Email">
      <Input />
    </Form.Item>
  </Col>,
];
