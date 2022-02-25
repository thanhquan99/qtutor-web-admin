import { Avatar, Space } from "antd";
import GenderComponent from "../../components/helper/gender-component";
import StudentActiveSwitcher from "../../components/student/active-switcher";

export const dataColumns = [
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
    title: "City",
    dataIndex: "profile",
    render: (profile) => profile?.city?.name,
  },
  {
    title: "Academic Level",
    dataIndex: "profile",
    render: (profile) => profile?.academicLevel,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    sorter: true,
    render: (e) => new Date(e).toLocaleString("vi-VN"),
  },
  {
    title: "Updated At",
    dataIndex: "updatedAt",
    sorter: true,
    render: (e) => new Date(e).toLocaleString("vi-VN"),
  },
  {
    title: "Active",
    render: (text, record) => (
      <StudentActiveSwitcher student={record} />
    ),
  },
];

