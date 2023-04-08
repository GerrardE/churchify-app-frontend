const constants = {
  parameters: "activityreports",
  parameter: "activityreport",
  activitytypeparams: "activitytypes",
  zonesparams: "zones",
  branchesparams: "branches",
  editurl: "/reports/activityreports",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Branch",
      accessor: "branchid",
    },
    {
      Header: "Zone",
      accessor: "zoneid",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Council",
      accessor: "council",
    },
    {
      Header: "special",
      accessor: "special",
    },
    {
      Header: "project",
      accessor: "project",
    },
    {
      Header: "CreatedAt",
      accessor: "createdAt",
    },
    {
      Header: "UpdatedAt",
      accessor: "updatedAt",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
  ],
};

export default constants;
