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
      Header: "Submittedby",
      accessor: "useractivity.firstname",
    },
    {
      Header: "Branch",
      accessor: "branchactivity.name",
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
      Header: "Activity Date",
      accessor: "date",
    },
    {
      Header: "CreatedAt",
      accessor: "createdAt",
    },
    {
      Header: "UpdatedAt",
      accessor: "updatedAt",
    },
  ],
};

export default constants;
