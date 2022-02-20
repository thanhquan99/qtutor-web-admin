export const userColumns = [
  {
    title: "Email",
    dataIndex: "email",
    // render: (e) => e.profile?.name,
  },
  {
    title: "Name",
    dataIndex: "profile",
    render: (profile) => profile?.name,
  },
  // {
  //   title: "Subject",
  //   dataIndex: "subject",
  //   render: (e) => e.name,
  // },
  // {
  //   title: "Price",
  //   dataIndex: "price",
  //   sorter: true,
  // },
  // {
  //   title: "Pay Type",
  //   dataIndex: "payType",
  // },
  // {
  //   title: "Status",
  //   dataIndex: "status",
  //   render: (e) => (
  //     <Tag color={STATUS_COLOR[e]} key={e}>
  //       {e.toUpperCase()}
  //     </Tag>
  //   ),
  // },
  // {
  //   title: "Start Time",
  //   dataIndex: "startTime",
  //   sorter: true,
  //   render: (e) => new Date(e).toLocaleString("vi-VN"),
  // },
  // {
  //   title: "End Time",
  //   dataIndex: "endTime",
  //   sorter: true,
  //   render: (e) => new Date(e).toLocaleString("vi-VN"),
  // },
  // {
  //   title: "Modified By",
  //   dataIndex: "modifiedUser",
  //   render: (e) => e?.profile?.name,
  // },
  // {
  //   title: "",
  //   render: (text, record) => (
  //     <Space size="middle">
  //       {/* {record.isEdit && <TransactionModalEdit transaction={record} />}
  //       {record.isCanPay && <TransactionPaypalPayment transaction={record} />} */}
  //     </Space>
  //   ),
  // },
];
