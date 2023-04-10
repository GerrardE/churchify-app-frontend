const constants = {
  parameters: "attendances",
  parameter: "attendance",
  zonesparams: "zones",
  branchesparams: "branches",
  eventsparams: "events",
  preachersparams: "preachers",
  editurl: "/reports/attendances",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Submittedby",
      accessor: "attendance.firstname",
    },
    {
      Header: "Branch",
      accessor: "branchattendance.name",
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
      Header: "Attendance Date",
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
