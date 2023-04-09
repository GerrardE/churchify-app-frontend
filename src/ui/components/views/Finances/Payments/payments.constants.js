const constants = {
  parameters: "payments",
  parameter: "payment",
  branchesparams: "branches",
  financesparams: "finances",
  zonesparams: "zones",
  editurl: "/finances/payments",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Finance",
      accessor: "financeid",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
  ],
};

export default constants;
