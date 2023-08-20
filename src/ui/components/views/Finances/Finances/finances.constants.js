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
      Header: "Submittedby",
      accessor: "user_finances.firstname",
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
    {
      Header: "Createdat",
      accessor: "createdAt",
    },
  ],
};

export default constants;
