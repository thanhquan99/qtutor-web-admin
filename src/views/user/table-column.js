import { Avatar, Space } from "antd";
import GenderComponent from "../../components/helper/gender-component";

export const userColumns = [
  {
    title: "Name",
    dataIndex: "profile",
    render: (e) => (
      <Space>
        <Avatar size={40} src={e?.avatar} />
        <span>{e?.name}</span>
        <GenderComponent isMale={e?.isMale} />
      </Space>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "City",
    dataIndex: "profile",
    render: (profile) => profile?.city?.name,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    sorter: true,
    render: (e) => new Date(e).toLocaleString("vi-VN"),
  },
];
