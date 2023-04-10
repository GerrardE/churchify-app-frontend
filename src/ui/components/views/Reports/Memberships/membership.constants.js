const constants = {
  parameters: "memberships",
  parameter: "membership",
  zonesparams: "zones",
  branchesparams: "branches",
  editurl: "/reports/memberships",
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
      Header: "Adults",
      accessor: "adults",
    },
    {
      Header: "Children",
      accessor: "children",
    },
    {
      Header: "Tithers",
      accessor: "tithers",
    },
    {
      Header: "Newmembers",
      accessor: "newmembers",
    },
    {
      Header: "Notes",
      accessor: "notes",
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
