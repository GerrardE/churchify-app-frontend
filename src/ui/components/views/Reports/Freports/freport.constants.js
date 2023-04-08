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
      Header: "Branch",
      accessor: "branchid",
    },
    {
      Header: "Zone",
      accessor: "zoneid",
    },
    {
      Header: "Fellowship",
      accessor: "fellowshipid",
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
      Header: "Date",
      accessor: "date",
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
