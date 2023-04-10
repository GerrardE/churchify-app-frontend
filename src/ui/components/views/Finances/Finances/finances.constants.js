const constants = {
  parameters: "finances",
  parameter: "finance",
  branchesparams: "branches",
  preachersparams: "preachers",
  zonesparams: "zones",
  editurl: "/finances/finances",
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
      Header: "Zone",
      accessor: "zoneid",
    },
    {
      Header: "Branch",
      accessor: "branchid",
    },
    {
      Header: "Preacher",
      accessor: "preacherid",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
  ],
};

export default constants;
