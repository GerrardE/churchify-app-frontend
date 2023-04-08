const constants = {
  parameters: "trainingreports",
  parameter: "trainingreport",
  trainingtypeparams: "trainingtypes",
  zonesparams: "zones",
  branchesparams: "branches",
  editurl: "/reports/trainingreports",
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
      Header: "Converts",
      accessor: "converts",
    },
    {
      Header: "Trainees",
      accessor: "trainees",
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
