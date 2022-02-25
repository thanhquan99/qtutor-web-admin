import { Space, Avatar, Button } from "antd";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import GenderComponent from "../../components/helper/gender-component";
import TutorActiveSwitcher from "../../components/tutor/active-switcher";

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
      <TutorActiveSwitcher tutor={record} />
    ),
  },
];

