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
      Header: "Submittedby",
      accessor: "usermembership.firstname",
    },
    {
      Header: "Branch",
      accessor: "branchmembership.name",
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
      Header: "Membership Date",
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
