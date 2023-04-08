const constants = {
  parameters: "attendances",
  parameter: "attendance",
  zonesparams: "zones",
  branchesparams: "branches",
  editurl: "/reports/attendances",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Preacher",
      accessor: "preacherid",
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
      Header: "Event",
      accessor: "eventid",
    },
    {
      Header: "Women",
      accessor: "women",
    },
    {
      Header: "Men",
      accessor: "men",
    },
    {
      Header: "Children",
      accessor: "children",
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
