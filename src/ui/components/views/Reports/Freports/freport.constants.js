const constants = {
  parameters: "cells",
  parameter: "cell",
  zonesparams: "zones",
  branchesparams: "branches",
  fellowshipsparams: "fellowships",
  editurl: "/reports/cells",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Submittedby",
      accessor: "userfreport.firstname",
    },
    {
      Header: "Branch",
      accessor: "branchfreport.name",
    },
    {
      Header: "Newcells",
      accessor: "newcells",
    },
    {
      Header: "Totalcells",
      accessor: "totalcells",
    },
    {
      Header: "Attendance",
      accessor: "attendance",
    },
    {
      Header: "Fellowship Date",
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
