const constants = {
  parameters: "assets",
  parameter: "asset",
  branchesparams: "branches",
  financesparams: "finances",
  zonesparams: "zones",
  editurl: "/finances/assets",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Finance",
      accessor: "financeid",
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
  ],
};

export default constants;
