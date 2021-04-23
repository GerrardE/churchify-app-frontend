const constants = {
  parameters: "apilogs",
  parameter: "apilog",
  editurl: "/system/apilogs",
  viewurl: "system",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "ReferenceId",
      accessor: "refid",
    },
    {
      Header: "HttpCode",
      accessor: "httpstatuscode",
    },
    {
      Header: "Message",
      accessor: "message",
    },
  ],
};

export default constants;
