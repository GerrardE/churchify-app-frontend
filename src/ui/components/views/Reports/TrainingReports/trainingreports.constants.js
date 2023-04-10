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
      Header: "Submittedby",
      accessor: "usertraining.firstname",
    },
    {
      Header: "Branch",
      accessor: "branchtraining.name",
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
      Header: "Training Date",
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
