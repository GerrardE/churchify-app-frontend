const constants = {
  parameters: "groups",
  parameter: "group",
  zonesparams: "zones",
  branchesparams: "branches",
  editurl: "/reports/groups",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Submittedby",
      accessor: "usergroup.firstname",
    },
    {
      Header: "Branch",
      accessor: "branchgroup.name",
    },
    {
      Header: "Cmf",
      accessor: "cmf",
    },
    {
      Header: "Cwf",
      accessor: "cwf",
    },
    {
      Header: "Ywcf",
      accessor: "ywcf",
    },
    {
      Header: "Gymcf",
      accessor: "gymcf",
    },
    {
      Header: "Yaf",
      accessor: "yaf",
    },
    {
      Header: "Teens",
      accessor: "teens",
    },
    {
      Header: "Rcf",
      accessor: "rcf",
    },
    {
      Header: "Group Date",
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
