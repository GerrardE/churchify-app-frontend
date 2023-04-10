const constants = {
  parameters: "receipts",
  parameter: "receipt",
  branchesparams: "branches",
  financesparams: "finances",
  zonesparams: "zones",
  editurl: "/finances/receipts",
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