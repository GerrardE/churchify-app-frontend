const constants = {
  parameters: "assets",
  parameter: "asset",
  branchesparams: "branches",
  financesparams: "finances",
  zonesparams: "zones",
  editurl: "/finances/assets",
  deleteurl: "/finance/assets",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Submittedby",
      accessor: "user_assets.firstname",
    },
    {
      Header: "Finance",
      accessor: "finance_assets.name",
    },
    {
      Header: "Building",
      accessor: "building",
    },
    {
      Header: "MotorVehicle",
      accessor: "motorvehicle",
    },
    {
      Header: "Generator",
      accessor: "generator",
    },
    {
      Header: "MusicalEqpt",
      accessor: "musicaleqpt",
    },
    {
      Header: "AsabaProject",
      accessor: "asabaproject",
    },
    {
      Header: "Others",
      accessor: "others",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
    {
      Header: "Createdat",
      accessor: "createdAt",
    },
  ],
};

export default constants;
